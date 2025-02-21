import Spinner from "@shared/ui/Spinner";
import useAuth from "@widgets/hooks/use-auth";
import useStatistics from "@widgets/hooks/use-statistics";
import { useEffect } from "react";
import { UserStatisticsUl } from "./UserStatistics.styles";

const UserStatistics: React.FC = () => {
  const { user } = useAuth();
  const { onGetStatistics, data, isLoading } = useStatistics();

  useEffect(() => {
    if (user) {
      onGetStatistics(user.id);
    }
  }, [user, onGetStatistics]);

  if (isLoading) {
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
