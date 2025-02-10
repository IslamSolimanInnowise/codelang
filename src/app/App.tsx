import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../shared/styles/themes";
import { GlobalStyles } from "../shared/styles/globalStyles";
import { useAppDispatch, useAppSelector } from "../shared/hooks";
import { switchTheme } from "../features/theme/themeSlice";
import { Routes, Route } from "react-router";
import AppLayout from "../shared/layout/AppLayout";

const App: React.FC = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  function handleThemeSwitch() {
    dispatch(switchTheme());
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <div>
                <h2>Hello, World!</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi, dolorem.
                </p>
                <button onClick={handleThemeSwitch}>Switch Theme</button>
              </div>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
export default App;
