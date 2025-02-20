import Spinner from "@shared/ui/Spinner";
import useAuth from "@widgets/hooks/useAuth";
import useStatistics from "@widgets/hooks/useStatistics";
import { useEffect } from "react";
import { UserStatisticsUl } from "./UserStatistics.styles";

const UserStatistics: React.FC = () => {
  const { user } = useAuth();
  const { onGetStatistics, data, isStatisticsLoading } = useStatistics();

  useEffect(() => {
    if (user) {
      onGetStatistics(user.id);
    }
  }, [user, onGetStatistics]);

  if (isStatisticsLoading) {
    return <Spinner />;
  }

  return (
    <UserStatisticsUl>
      {data.map((stat) => {
        return <li key={stat}>{stat}</li>;
      })}
    </UserStatisticsUl>
  );
};
export default UserStatistics;
