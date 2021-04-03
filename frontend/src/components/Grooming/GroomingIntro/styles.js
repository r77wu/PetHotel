import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../assets/image/karsten-winegeart-5PVXkqt2s9k-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    background: `url(${bg}) no-repeat center`,
    backgroundSize: "cover",
    position: "relative",
  },
  sloganContainer: {
    width: "550px",
    position: "absolute",
    top: "30%",
    left: "5%",
    [theme.breakpoints.down("sm")]: {
      top: "5%",
      left: "5%",
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  slogan: {
    marginBottom: "1rem",
  },
  cited: {
    position: "absolute",
    bottom: "1%",
    right: "2%",
    [theme.breakpoints.down("sm")]: {
      right: "4%",
    },
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
  },
}));

export default useStyles;
