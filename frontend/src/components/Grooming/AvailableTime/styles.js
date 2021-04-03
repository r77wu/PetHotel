import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "850px",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "390px",
      position: "absolute",
      top: 0,
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
    marginBottom: "20px",
  },
  timeContainer: {
    width: "80px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    cursor: "pointer",
    border: "1px solid #000000",
  },
}));

export default useStyles;
