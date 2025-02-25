import Aside from "@widgets/ui/Aside";
import {
  PageContent,
  AccountMain,
  UserNameSpan,
  UpdateAccountForms,
} from "./Account.styles";
import useAuth from "@widgets/hooks/use-auth";
import AccountDetails from "@widgets/ui/AccountDetails";
import NewUsernameForm from "@widgets/ui/NewUsernameForm";
import NewPasswordForm from "@widgets/ui/NewPasswordForm";

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
        <UpdateAccountForms>
          <NewUsernameForm />
          <NewPasswordForm />
        </UpdateAccountForms>
      </PageContent>
    </AccountMain>
  );
};
export default AccountPage;
