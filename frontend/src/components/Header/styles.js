import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "absolute",
    width: "100%",
    zIndex: "1",
  },
  logoBtn: {
    marginTop: "1em",
  },
}));

export default useStyles;
