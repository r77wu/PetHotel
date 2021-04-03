import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "#eecdc2",
  },
  contentContainer: {
    position: "absolute",
    top: "150px",
    left: "250px",
    width: "calc(100vw - 250px)",
    minHeight: "calc(100vh - 150px)",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: "150px",
      left: "0px",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default useStyles;
