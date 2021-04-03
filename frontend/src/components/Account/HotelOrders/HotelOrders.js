import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Divider,
  Grid,
  AccordionActions,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";

import {
  fetchHotelOrders,
  cancelHotelOrder,
} from "../../../store/actions/profile";

const HotelOrders = (props) => {
  const { onFetchHotelOrders, onCancelOrder, hotelOrders } = props;
  const classes = useStyles();
  hotelOrders.sort((a, b) => {
    if (a.check_in_date < b.check_in_date) {
      return -1;
    } else {
      return 1;
    }
  });
  useEffect(() => {
    onFetchHotelOrders();
  }, []);

  return (
    <Box className={classes.container}>
      <Typography variant="h4" color="textSecondary">
        Hotel Orders
      </Typography>
      {hotelOrders.map((order) => (
        <Accordion key={order.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
          >
            <Box className={classes.column}>
              <Typography variant="subtitle1" color="textSecondary">
                {order.pet}
              </Typography>
            </Box>
            <Box className={classes.column}>
              <Typography variant="body2" color="textSecondary">
                {`${order.check_in_date} to ${order.check_out_date}`}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Grid container justify="space-around">
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      {`Check In Date: ${order.check_in_date}`}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      {`Check Out Date: ${order.check_out_date}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justify="space-around">
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      {`Pet: ${order.pet}`}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      {`Room: ${
                        order.room < 6 ? "Standard Room" : "Private Suite"
                      }`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Typography variant="body2" color="textSecondary">
              Current Status:{" "}
              {order.status === 1 ? (
                <span style={{ color: "green" }}>Confirm</span>
              ) : (
                <span style={{ color: "red" }}>Cancel</span>
              )}
            </Typography>
            <Button
              color="secondary"
              onClick={() => {
                onCancelOrder(order.id);
              }}
            >
              Cancel order
            </Button>
          </AccordionActions>
        </Accordion>
      ))}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  hotelOrders: state.profile.hotelOrders,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchHotelOrders: () => {
      dispatch(fetchHotelOrders());
    },
    onCancelOrder: (id) => {
      dispatch(cancelHotelOrder(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelOrders);
