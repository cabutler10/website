import { createMuiTheme } from "material-ui/styles";
import "../App.css";

const pink = "#FFE9E3";
const brown = "#998A8A";
const white = "#F7F5F5";
const greyDk = "#333333";
const grey = "#999999";
const greyLt = "#f9f9f9";
const red = "#991010";
const blue = "#e3f9ff";
const green = "#e3ffe9";
const purple = "#e9e3ff";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#fff8f6",
      main: pink,
      dark: "#e5d1cc"
    },
    secondary: {
      light: "#c1b8b8",
      main: brown,
      dark: "#6b6060"
    },
    error: { main: red }
  },
  status: {
    white: white,
    grey: grey,
    greyDk: greyDk,
    greyLt: greyLt,
    brown: brown,
    red: red,
    pink: pink,
    blue: blue,
    green: green,
    purple: purple
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: greyDk
      },
      colorSecondary: {
        color: grey
      },
      colorTextSecondary: {
        color: pink
      }
    }
  }
});

export default theme;
