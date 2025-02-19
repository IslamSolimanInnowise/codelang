import Aside from "@widgets/ui/Aside";
import { PageContent, AccountMain, UserNameSpan } from "./Account.styles";
import useAuth from "@widgets/hooks/useAuth";
import AccountDetails from "@widgets/ui/AccountDetails";
import NewUsernameForm from "@widgets/ui/NewUsernameForm";

const AccountPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <AccountMain>
      <Aside />
      <PageContent>
        <h2>
          Welcome, <UserNameSpan>{user?.username}</UserNameSpan>
        </h2>
        <AccountDetails />
        <NewUsernameForm />
      </PageContent>
    </AccountMain>
  );
};
export default AccountPage;
