import { Outlet } from "react-router";
import {
  StyledHeader,
  StyledHeading1,
  StyledNavLink,
  StyledNavList,
} from "./appLayout.styles";
import { Button } from "@mui/material";
import { switchTheme } from "../../features/theme/themeSlice";
import { useAppDispatch } from "../hooks";

const AppLayout: React.FC = () => {
  const dispatch = useAppDispatch();

  function handleThemeSwitch() {
    dispatch(switchTheme());
  }

  return (
    <>
      <StyledHeader>
        <StyledHeading1>CodeLang</StyledHeading1>
        <nav>
          <StyledNavList>
            <li>
              <Button variant="outlined">
                <StyledNavLink to="">Register</StyledNavLink>
              </Button>
            </li>
            <li>
              <Button variant="outlined">
                <StyledNavLink to="">Sign in</StyledNavLink>
              </Button>
            </li>
            <li>
              <Button variant="contained" onClick={handleThemeSwitch}>
                Switch Theme
              </Button>
            </li>
          </StyledNavList>
        </nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};
export default AppLayout;
