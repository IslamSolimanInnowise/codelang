import Spinner from "@shared/ui/Spinner";
import useAuth from "@widgets/hooks/useAuth";
import useStatistics from "@widgets/hooks/useStatistics";
import { useEffect } from "react";
import { UserStatisticsUl } from "./UserStatistics.styles";

const UserStatistics: React.FC = () => {
  const { user } = useAuth();
  const { statistic, onGetStatistics } = useStatistics();

  useEffect(() => {
    if (user) {
      onGetStatistics(user.id);
    }
  }, [user, onGetStatistics]);

  if (!statistic) {
    return <Spinner />;
  }

  return (
    <UserStatisticsUl>
      {Object.entries(statistic).map((stat) => {
        return (
          <li key={stat[0]}>
            {stat[0]}: {stat[1]}
          </li>
        );
      })}
    </UserStatisticsUl>
  );
};
export default UserStatistics;
