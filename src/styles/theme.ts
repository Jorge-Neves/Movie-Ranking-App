import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff', // $bg
    },
    primary: {
      main: '#012433', // $header
    },
    secondary: {
      main: '#00baff', //button-bg-focused
    },
    custom: {
      // you can access these via theme.palette.custom.listTitle, etc.
      bg: '#ffffff',
      headingText: '#386071',
      listTitle: '#0b749b',
      listDivider1: '#0b749b',
      listText: '#536b7a',
      listDivider2: '#9aaebb',
      header: '#012433',
      buttonBorder: '#78849e66',
      buttonText: '#78849e',
      buttonTextFocused: '#012433',
      buttonBg: '#ffffff',
      buttonBgFocused: '#00baff',
      modalText: '#78849e',
      modalTitle: '#164e78',
      modalLabels: '#78849eb9',
      modalNames: '#00baff',
      modalCloseButton: '#718fa2',
      dropdownTitle: '#78849eb9',
      dropdownItems: '#536b7a',
    },
  },
});

export default theme;
