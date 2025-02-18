import { Outlet, useNavigate } from "react-router";
import { StyledHeader, StyledNavLink, StyledNavList } from "./appLayout.styles";
import { Button } from "@mui/material";
import { switchTheme } from "@features/theme/themeSlice";
import { useAppDispatch } from "@shared/hooks";
import { RoutesEnum } from "@shared/routes";
import useAuth from "@widgets/hooks/useAuth";

const AppLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, onLogoutSubmit } = useAuth();
  const navigate = useNavigate();

  function handleThemeSwitch() {
    dispatch(switchTheme());
  }

  async function handleLogoutClick() {
    await onLogoutSubmit().unwrap();
    navigate(RoutesEnum.Login);
  }

  return (
    <>
      <StyledHeader>
        <StyledNavLink to="/">CodeLang</StyledNavLink>
        <nav>
          <StyledNavList>
            {user ? (
              <li>
                <Button variant="outlined" onClick={handleLogoutClick}>
                  Logout
                </Button>
              </li>
            ) : (
              <>
                <li>
                  <Button variant="outlined">
                    <StyledNavLink to={RoutesEnum.Register}>
                      Register
                    </StyledNavLink>
                  </Button>
                </li>
                <li>
                  <Button variant="outlined">
                    <StyledNavLink to={RoutesEnum.Login}>Sign in</StyledNavLink>
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
