import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import {
  Box,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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

export default function DropdownMenu() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <Box className={classes.dropdownMenu}>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <AccountCircleIcon fontSize="large" />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {accountMenu.map((item) => (
                    <MenuItem
                      key={item.id}
                      onClick={handleClose}
                      component={Link}
                      to={item.path}
                      className={classes.menuItem}
                    >
                      {item.event}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
