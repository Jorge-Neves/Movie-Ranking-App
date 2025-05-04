import { FC } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import "./App.css";
import HomePage from "./pages/Home";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
