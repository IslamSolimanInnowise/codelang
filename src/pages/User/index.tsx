import Spinner from "@shared/ui/Spinner";
import useUsers from "@widgets/hooks/use-users";
import Aside from "@widgets/ui/Aside";
import { useEffect } from "react";
import { useParams } from "react-router";
import { PageContent, PageMain, UserHeading } from "./User.styles";
import UserStatistics from "@widgets/ui/UserStatistics";

const UserPage: React.FC = () => {
  const { user, getOneUser, isLoading } = useUsers();
  const params = useParams();

  useEffect(() => {
    getOneUser(Number(params.userId));
  }, [getOneUser, params.userId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PageMain>
      <Aside />
      <PageContent>
        {user && (
          <>
            <UserHeading>These are {user.username}'s details:</UserHeading>
            <UserStatistics id={user.id} />
          </>
        )}
      </PageContent>
    </PageMain>
  );
};
export default UserPage;
