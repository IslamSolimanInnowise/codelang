import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../shared/styles/themes";
import { GlobalStyles } from "../shared/styles/globalStyles";
import { useAppSelector } from "../shared/hooks";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
};
export default App;
