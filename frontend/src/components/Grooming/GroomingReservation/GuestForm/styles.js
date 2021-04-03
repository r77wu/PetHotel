import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "850px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "390px",
      zIndex: "1",
    },
  },
  addGuestBtn: {
    marginTop: "10px",
  },
  form: {
    padding: "1em",
  },
  multilineColor: {
    color: "#000000",
  },
  inputfield: {
    "& .MuiInputBase-input": {
      color: "#000", // Text color
    },
  },
  selectDisplay: {
    color: "#000000",
  },
  selectMenu: {
    width: "100px",
    color: "#000000",
  },
  selectItem: {
    color: "#000000",
  },
}));

export default useStyles;
