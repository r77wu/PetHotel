import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import useStyles from "./styles";

const accountMenu = [
  {
    id: 0,
    event: "Account detail",
    path: "/account",
  },
  {
    id: 1,
    event: "Pets",
    path: "/account/pets",
  },
  {
    id: 2,
    event: "Hotel orders",
    path: "/account/hotel-orders",
  },
  {
    id: 3,
    event: "Groom orders",
    path: "/account/groom-orders",
  },
];

const AccountNavbar = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <List subheader={<ListSubheader>Account</ListSubheader>}>
        {accountMenu.map((item) => (
          <ListItem key={item.id} button component={Link} to={item.path}>
            <ListItemText primary={item.event} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountNavbar);
