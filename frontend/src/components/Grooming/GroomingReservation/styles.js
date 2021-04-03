import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "850px",
    height: "66px",
    background: theme.palette.primary.main,
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "-33px",
      background: theme.palette.primary.main,
      width: "33px",
      height: "66px",
      borderBottomLeftRadius: "66px",
      borderTopLeftRadius: "66px",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      top: "0",
      right: "-33px",
      background: theme.palette.primary.main,
      width: "33px",
      height: "66px",
      borderBottomRightRadius: "66px",
      borderTopRightRadius: "66px",
    },
  },
  dateContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    height: "60px",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "-30px",
      background: theme.palette.primary.main,
      width: "30px",
      height: "60px",
      borderBottomLeftRadius: "60px",
      borderTopLeftRadius: "60px",
      zIndex: "1",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      top: "0",
      right: "-30px",
      background: theme.palette.primary.main,
      width: "30px",
      height: "60px",
      borderBottomRightRadius: "60px",
      borderTopRightRadius: "60px",
      zIndex: "1",
    },
    "&:hover, &:hover:before, &:hover:after": {
      background: "#eee",
    },
  },
  dateInput: {
    margin: 0,
  },
  multilineColor: {
    color: "#000000",
  },
  servicesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "60px",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "-30px",
      background: theme.palette.primary.main,
      width: "30px",
      height: "60px",
      borderBottomLeftRadius: "60px",
      borderTopLeftRadius: "60px",
      zIndex: "1",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      top: "0",
      right: "-30px",
      background: theme.palette.primary.main,
      width: "30px",
      height: "60px",
      borderBottomRightRadius: "60px",
      borderTopRightRadius: "60px",
      zIndex: "1",
    },
    "&:hover, &:hover:before, &:hover:after": {
      background: "#eee",
      cursor: "pointer",
    },
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "60px",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "-30px",
      background: theme.palette.primary.main,
      width: "30px",
      height: "60px",
      borderBottomLeftRadius: "60px",
      borderTopLeftRadius: "60px",
      zIndex: "1",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      top: "0",
      right: "-30px",
      background: theme.palette.primary.main,
      width: "30px",
      height: "60px",
      borderBottomRightRadius: "60px",
      borderTopRightRadius: "60px",
      zIndex: "1",
    },
    "&:hover, &:hover:before, &:hover:after": {
      background: "#eee",
      cursor: "pointer",
    },
  },
  bookBtn: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  moblieContainer: {
    width: "400px",
    height: "300px",
    backgroundColor: "white",
    borderRadius: "20px",
  },
}));

export default useStyles;
