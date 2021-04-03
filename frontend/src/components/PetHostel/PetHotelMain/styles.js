import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../assets/image/jamie-street-s9Tf1eBDFqw-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: "100vw",
    minHeight: "70vh",
    background: `url(${bg}) no-repeat center`,
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
  accommodationContainer: {},
}));

export default useStyles;
