import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import "./App.css";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Router from "./routes/router";

const customTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </ThemeProvider>
  );
}

export default App;
