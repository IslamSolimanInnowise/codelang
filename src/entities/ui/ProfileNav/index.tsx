import AsideNavLink from "@shared/ui/AsideNavLink/AsideNavLink";
import { profileNavData } from "./data";
import { StyledUl } from "./StyledUl.styles";

const ProfileNav: React.FC = () => {
  return (
    <StyledUl>
      {profileNavData.map((dataLink) => {
        return <AsideNavLink {...dataLink} key={dataLink.linkText} />;
      })}
    </StyledUl>
  );
};
export default ProfileNav;
