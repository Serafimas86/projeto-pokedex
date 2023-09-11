import { ThemeProvider } from "./contexts/theme-context.js";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes.js";

function App() {
  return (
    <ThemeProvider>
        <GlobalStyle/>
        <AppRoutes/>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

`

export default App;
