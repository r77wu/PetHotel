import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "#eecdc2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "450px",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "3rem",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2em",
  },
  inputfield: {
    "& .MuiInputBase-input": {
      color: "#000000", // Text color
    },
    width: "250px",
    margin: "30px 0",
  },
  error: {
    color: theme.palette.error.main,
  },
}));

export default useStyles;
