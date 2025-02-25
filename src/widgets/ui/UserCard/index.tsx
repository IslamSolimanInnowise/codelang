import { RoutesEnum } from "@shared/routes";
import { StyledCard } from "./UserCard.styles";

interface UserCardProps {
  username: string;
  id: number;
}

const UserCard: React.FC<UserCardProps> = ({ username, id }) => {
  return (
    <StyledCard to={`${RoutesEnum.Users}/${id}`}>
      <h3>{username}</h3>
    </StyledCard>
  );
};
export default UserCard;
