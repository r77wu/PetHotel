import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "850px",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "390px",
      position: "relative",
      zIndex: "1",
    },
  },
}));

export default useStyles;
