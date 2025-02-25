import useAuth from "@widgets/hooks/use-auth";
import {
  AccountDetailsSection,
  ButtonsContainer,
  UserDataDiv,
  UserDetailsDiv,
} from "./AccountDetails.styles";
import profileIMG from "@shared/assets/profile.svg";
import logoutIMG from "@shared/assets/out.svg";
import trashIMG from "@shared/assets/trash.svg";
import UserStatistics from "../UserStatistics";

const AccountDetails: React.FC = () => {
  const { user, onLogoutSubmit, onDeleteUser } = useAuth();

  return (
    <AccountDetailsSection>
      <UserDetailsDiv>
        <img src={profileIMG} alt="profile-dummy-image" />
        <UserDataDiv>
          <h3>{user?.username}</h3>
          <p>Id: {user?.id}</p>
          <p>Role: {user?.role}</p>
          <ButtonsContainer>
            <img src={logoutIMG} alt="logout icon" onClick={onLogoutSubmit} />
            <img src={trashIMG} alt="trash icon" onClick={onDeleteUser} />
          </ButtonsContainer>
        </UserDataDiv>
      </UserDetailsDiv>
      <UserStatistics />
    </AccountDetailsSection>
  );
};
export default AccountDetails;
