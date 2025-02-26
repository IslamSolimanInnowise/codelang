import Aside from "@widgets/ui/Aside";
import {
  AllUsersContainer,
  PageContent,
  PageMain,
  StyledPagination,
  UsersHeading,
} from "./Users.styles";
import useUsers from "@widgets/hooks/use-users";
import { useEffect } from "react";
import Spinner from "@shared/ui/Spinner";
import UserCard from "@widgets/ui/UserCard";

const UsersPage: React.FC = () => {
  const { getUsers, isLoading, users, currentPage, totalPages, changePage } =
    useUsers();

  useEffect(() => {
    getUsers({ currentPage });
  }, [getUsers, currentPage]);

  if (isLoading) {
    return <Spinner />;
  }

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    changePage(page);
  };

  return (
    <PageMain>
      <Aside />
      <PageContent>
        <UsersHeading>These are all the users</UsersHeading>
        <AllUsersContainer>
          {users &&
            users.map((user) => user && <UserCard {...user} key={user.id} />)}
        </AllUsersContainer>
        <StyledPagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </PageContent>
    </PageMain>
  );
};
export default UsersPage;
