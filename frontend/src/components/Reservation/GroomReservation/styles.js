import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    minWidth: "100vw",

    backgroundColor: "#eecdc2",
  },
  tableContainer: {
    paddingTop: "106px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gridBox: {
    width: "600px",
    border: "2px solid #000",
    borderRadius: "20px",
    margin: "10px",
  },
  inputfield: {
    "& .MuiInputBase-input": {
      color: "#000000", // Text color
    },
    width: "200px",
  },
  formContainer: {
    width: "450px",
    margin: "10px",
    padding: "50px",
    border: "1px solid #000",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
