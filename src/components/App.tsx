import BaseStyles from "./BaseStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        css={(theme) => ({
          backgroundColor: theme?.colors?.["cream-tusk"],
          width: "100vw",
          height: "100vh",
        })}
      >
        <BaseStyles />
        <p>cenoura</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
