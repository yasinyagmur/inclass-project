import AppRouter from "./Router/AppRouter";
import theme from "./components/GlobalStyles/theme";
import { ThemeProvider } from "styled-components";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
