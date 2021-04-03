import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3em",
  },
  inputfield: {
    "& .MuiInputBase-input": {
      color: "#000000", // Text color
    },
    width: "400px",
    margin: "30px 0",
  },
  error: {
    color: theme.palette.error.main,
  },
}));

export default useStyles;
