import BaseStyles from "./BaseStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />
      <p>cenoura</p>
    </ThemeProvider>
  );
}

export default App;
