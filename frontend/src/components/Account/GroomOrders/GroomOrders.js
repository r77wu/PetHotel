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
  fetchGroomOrders,
  cancelGroomOrder,
} from "../../../store/actions/profile";

const GroomOrders = (props) => {
  const { groomOrders, onFetchGroomOrders, onCancelOrder } = props;
  const classes = useStyles();
  useEffect(() => {
    onFetchGroomOrders();
  }, []);
  groomOrders.sort((a, b) => {
    if (a.date_time < b.date_time) {
      return -1;
    } else {
      return 1;
    }
  });
  return (
    <Box className={classes.container}>
      <Typography variant="h4" color="textSecondary">
        Grooming Orders
      </Typography>
      {groomOrders.map((order) => (
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
                {`${order.date_time.split("T")[0]} ${order.date_time
                  .split("T")[1]
                  .slice(0, -1)}`}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Grid container justify="space-around">
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      {`Check In Date: ${order.date_time.split("T")[0]}`}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      {`Check In Time: ${order.date_time
                        .split("T")[1]
                        .slice(0, -1)}`}
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
                      {`Service: ${
                        order.groom === 1
                          ? "Bath & Brush"
                          : "Bath & Full Haircut"
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
  groomOrders: state.profile.groomOrders,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchGroomOrders: () => {
      dispatch(fetchGroomOrders());
    },
    onCancelOrder: (id) => {
      dispatch(cancelGroomOrder(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroomOrders);
