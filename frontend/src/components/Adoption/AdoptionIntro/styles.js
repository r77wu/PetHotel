import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../assets/image/fabian-gieske-pcXb7MobWvk-unsplash.jpg";

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

    [theme.breakpoints.down("md")]: {
      width: "350px",
      top: "30%",
      left: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "6%",
      left: "5%",
      width: "350px",
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
    color: "#000000",
  },
  btn: {
    color: "#000000",
  },
}));

export default useStyles;
