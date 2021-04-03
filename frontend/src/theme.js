import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#F9F9F3",
      dark: "#F2F3F4",
    },
    secondary: {
      main: "#000000", //"#eecdc2",
      light: "#f4ddd6",
      dark: "#e3ac9a",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#85a1ca",
      },
    },
    MuiPickersDay: {
      day: {
        color: "#85a1ca",
      },
      daySelected: {
        backgroundColor: "#85a1ca",
      },
      current: {
        color: "#85a1ca",
      },
    },
    MuiPickersClockNumber: {
      clockNumber: {
        color: "#000000",
      },
    },
    MuiPickersClock: {
      clock: {
        backgroundColor: "#85a1ca",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: "black",
      },
    },

    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#000000",
        },
      },
    },
  },
});

export default theme;
