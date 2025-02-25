import Spinner from "@shared/ui/Spinner";
import useStatistics from "@widgets/hooks/use-statistics";
import { useEffect } from "react";
import { UserStatisticsUl } from "./UserStatistics.styles";

interface UserStatisticsProps {
  id: number;
}

const UserStatistics: React.FC<UserStatisticsProps> = ({ id }) => {
  const { onGetStatistics, data, isLoading } = useStatistics();

  useEffect(() => {
    onGetStatistics(id);
  }, [id, onGetStatistics]);

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
