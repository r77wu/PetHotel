import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "850px",
    marginTop: "10px",
  },
  header: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    color: "#000",
    fontSize: "24px",
  },
  card: {
    width: "400px",
    height: "550px",
    cursor: "pointer",
  },
  cardsContainer: {
    padding: "20px",
  },
}));

export default useStyles;
