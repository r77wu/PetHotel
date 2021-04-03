import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../assets/image/autri-taheri-l0Gq4BmboYY-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: "100vw",
    minHeight: "70vh",
    background: `url(${bg}) no-repeat top`,
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  reservationContainer: {
    position: "absolute",
    top: "106px",
  },
}));

export default useStyles;
