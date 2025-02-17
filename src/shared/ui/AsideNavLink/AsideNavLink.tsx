import { RoutesEnum } from "@shared/routes";
import { NavLink } from "react-router";
import { StyledLi } from "./StyledLi.styles";

interface AsideNavLinkProps {
  src: string;
  to: RoutesEnum;
  linkText: string;
}

const AsideNavLink: React.FC<AsideNavLinkProps> = ({ linkText, src, to }) => {
  return (
    <StyledLi>
      <img src={src} alt={linkText} />
      <NavLink to={to}>{linkText}</NavLink>
    </StyledLi>
  );
};
export default AsideNavLink;
