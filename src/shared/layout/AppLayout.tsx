import { Outlet } from "react-router";
import {
  StyledHeader,
  StyledHeading1,
  StyledNavLink,
  StyledNavList,
} from "./appLayout.styles";

const AppLayout: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeading1>CodeLang</StyledHeading1>
        <nav>
          <StyledNavList>
            <li>
              <StyledNavLink to="">Link 1</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="">Link 2</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="">Link 3</StyledNavLink>
            </li>
          </StyledNavList>
        </nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};
export default AppLayout;
