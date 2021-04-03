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
  cardsContainer: {
    padding: "20px",
  },
}));

export default useStyles;
