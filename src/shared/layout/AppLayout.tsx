import { Outlet } from "react-router";
import {
  StyledHeader,
  StyledHeading1,
  StyledNavLink,
  StyledNavList,
} from "./appLayout.styles";
import { Button } from "@mui/material";
import { switchTheme } from "@features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@shared/hooks";

const AppLayout: React.FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  function handleThemeSwitch() {
    dispatch(switchTheme());
  }

  return (
    <>
      <StyledHeader>
        <StyledNavLink to="/">
          <StyledHeading1>CodeLang</StyledHeading1>
        </StyledNavLink>
        <nav>
          <StyledNavList>
            {!isLoggedIn && (
              <>
                <li>
                  <Button variant="outlined">
                    <StyledNavLink to="/register">Register</StyledNavLink>
                  </Button>
                </li>
                <li>
                  <Button variant="outlined">
                    <StyledNavLink to="/login">Sign in</StyledNavLink>
                  </Button>
                </li>
              </>
            )}
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
