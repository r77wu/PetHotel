import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../assets/image/victor-grabarczyk-N04FIfHhv_k-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    background: `url(${bg}) no-repeat center`,
    backgroundSize: "cover",
    position: "relative",
  },
  sloganContainer: {
    position: "absolute",
    top: "40%",
    left: "5%",
    width: "550px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      top: "30%",
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
