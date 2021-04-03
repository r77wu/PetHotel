import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "400px",
    },
  },
  column: {
    flexBasis: "40%",
  },
  inputfield: {
    "& .MuiInputBase-input": {
      color: "#000000", // Text color
    },
    width: "200px",
  },
  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
