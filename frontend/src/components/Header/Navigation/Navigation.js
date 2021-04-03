import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useStyles from "./styles";

const navItems = [
  {
    eventKey: 0,
    path: "/",
    name: "Home",
  },
  {
    eventKey: 1,
    path: "/petshotel",
    name: "Petshotel",
  },
  {
    eventKey: 2,
    path: "/grooming",
    name: "Grooming",
  },
  {
    eventKey: 3,
    path: "/adoption",
    name: "Adoption",
  },
];

function Navigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedIdx, setSelectedIdx] = useState(0);
  useEffect(() => {
    navItems.forEach((item) => {
      if (item.path === window.location.pathname) {
        setSelectedIdx(item.eventKey);
      }
    });
  }, [window.location.pathname]);

  const handleChangeIdx = (event, newValue) => {
    setSelectedIdx(newValue);
  };
  return (
    <Tabs
      textColor={matches ? "secondary" : "primary"}
      orientation={matches ? "vertical" : "horizontal"}
      value={selectedIdx}
      onChange={handleChangeIdx}
      indicatorColor="primary"
    >
      {navItems.map((item) => (
        <Tab
          key={item.eventKey}
          label={item.name}
          component={Link}
          to={item.path}
          className={classes.tab}
          value={item.eventKey}
        />
      ))}
    </Tabs>
  );
}

export default Navigation;
