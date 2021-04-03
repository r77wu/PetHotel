import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dropdownMenu: {
    position: "absolute",
    top: 30,
    right: 70,
    zIndex: 1,
  },
  menuItem: {
    color: "#000000",
  },
}));

export default useStyles;
