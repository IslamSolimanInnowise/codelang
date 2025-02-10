import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../shared/styles/themes";
import { GlobalStyles } from "../shared/styles/globalStyles";
import { useAppDispatch, useAppSelector } from "../shared/hooks";
import { switchTheme } from "../features/theme/themeSlice";

const App: React.FC = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  function handleThemeSwitch() {
    dispatch(switchTheme());
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
