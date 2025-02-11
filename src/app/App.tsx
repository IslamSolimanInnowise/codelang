import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router";
import { useAppSelector } from "@shared/hooks";
import { darkTheme, lightTheme } from "@shared/styles/themes";
import { GlobalStyles } from "@shared/styles/globalStyles";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
