import ProfileNav from "@entities/ui/ProfileNav";
import profileIMG from "@shared/assets/profile.svg";
import useAuth from "@widgets/hooks/useAuth";
import { StyledAside, StyledPerson } from "./Aside.styles";

const Aside: React.FC = () => {
  const { user } = useAuth();

  return (
    <StyledAside>
      <StyledPerson className="person">
        <img src={profileIMG} alt="profile" />
        <p>{user?.username}</p>
      </StyledPerson>
      <ProfileNav />
    </StyledAside>
  );
};
export default Aside;
