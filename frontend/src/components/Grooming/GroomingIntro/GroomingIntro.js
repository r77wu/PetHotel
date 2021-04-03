import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";
// import { useTheme } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

function GroomingIntro(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box className={classes.container}>
      <Box className={classes.sloganContainer}>
        <Typography variant="h2" color="textPrimary" className={classes.slogan}>
          Groomed with love
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          className={classes.slogan}
        >
          Our trained pet stylists have more than three years of hands-on
          grooming experiences that includes bathing, trimming and styling with
          all breeds. Bringing out the best in your pet!
        </Typography>
        <Button variant="outlined" component={Link} to="/grooming">
          Learn More
        </Button>
      </Box>
      <Box className={classes.cited}>
        <Typography variant="body2" color="primary">
          <span>
            Photo by{" "}
            <a
              href="https://unsplash.com/@karsten116?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              className={classes.link}
            >
              Karsten Winegeart
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/s/photos/dog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              className={classes.link}
            >
              Unsplash
            </a>
          </span>
        </Typography>
      </Box>
    </Box>
  );
}

export default GroomingIntro;
