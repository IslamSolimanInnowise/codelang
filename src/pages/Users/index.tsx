import Aside from "@widgets/ui/Aside";
import {
  AllUsersContainer,
  PageContent,
  PageMain,
  UsersHeading,
} from "./Users.styles";
import useUsers from "@widgets/hooks/use-users";
import { useEffect } from "react";
import Spinner from "@shared/ui/Spinner";
import UserCard from "@widgets/ui/UserCard";

const UsersPage: React.FC = () => {
  const { getUsers, isLoading, users, currentPage } = useUsers();
  useEffect(() => {
    getUsers(currentPage);
  }, [getUsers, currentPage]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PageMain>
      <Aside />
      <PageContent>
        <UsersHeading>These are all the users</UsersHeading>
        <AllUsersContainer>
          {users &&
            users.map((user) => {
              const trueUser = user!;
              return <UserCard {...trueUser} key={trueUser.id} />;
            })}
        </AllUsersContainer>
      </PageContent>
    </PageMain>
  );
};
export default UsersPage;
