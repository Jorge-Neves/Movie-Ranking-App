import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff", // $bg
    },
    primary: {
      main: "#012433", // $header
    },
    secondary: {
      main: "#00baff", //button-bg-focused
    },
    custom: {
      // you can access these via theme.palette.custom.listTitle, etc.
      bg: "#ffffff",
      headingText: "#386071",
      listTitle: "#0b749b",
      listDivider: "#0b749b",
      listText: "#536b7a",
      header: "#012433",
      buttonBorder: "#78849e66",
      buttonText: "#78849e",
      buttonTextFocused: "#012433",
      buttonBg: "#ffffff",
      buttonBgFocused: "#00baff",
      modalText: "#78849e",
      modalTextCredits: "#00BAFF",
      modalTitle: "#164e78",
      modalLabels: "#78849eb9",
      modalDivider: "#21B3CF",
      modalNames: "#00baff",
      modalCloseButton: "#718fa2",
      dropdownTitle: "#78849eb9",
      dropdownItems: "#536b7a",
    },
  },
});

export default theme;
