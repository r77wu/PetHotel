import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      margin: "0.5em auto",
    },
  },
}));

export default useStyles;
