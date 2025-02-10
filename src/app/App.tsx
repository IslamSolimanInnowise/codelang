import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../shared/styles/themes";
import { GlobalStyles } from "../shared/styles/globalStyles";
import { useState } from "react";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  function handleThemeSwitch() {
    setIsDark((prev) => !prev);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div>
        <h1>Hello, World!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
          dolorem.
        </p>
        <button onClick={handleThemeSwitch}>Switch Theme</button>
      </div>
    </ThemeProvider>
  );
};
export default App;
