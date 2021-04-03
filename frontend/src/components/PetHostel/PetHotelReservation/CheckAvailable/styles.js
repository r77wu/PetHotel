import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "850px",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "380px",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: "1",
      backgroundColor: "#Ffffff",
      "&::before": {
        content: "''",
        position: "absolute",
        top: -120,
        left: -300,
        minHeight: "110vh",
        minWidth: "150vw",
        backgroundColor: "rgba(0,0,0,0.2)",
        zIndex: "-1",
      },
    },
  },
  header: {
    textAlign: "center",
  },
  title: {
    color: "#000",
  },
  card: {
    width: "380px",
    height: "200px",
    cursor: "pointer",
  },
}));

export default useStyles;
