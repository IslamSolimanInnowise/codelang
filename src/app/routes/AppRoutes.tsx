import HomePage from "@pages/Home/Home";
import LoginPage from "@pages/Login";
import RegisterPage from "@pages/Register";
import AppLayout from "@shared/layout/AppLayout";
import { RoutesEnum } from "@shared/routes";
import { Routes, Route } from "react-router";
import PrivateRouter from "./PrivateRouter";
import ProfilePage from "@pages/Profile";
import AccountPage from "@pages/Account";
import SnippetPage from "@pages/Snippet";
import AddSnippetPage from "@pages/AddSnippet";
import MySnippetsPage from "@pages/MySnippets";
import UsersPage from "@pages/Users";
import UserPage from "@pages/User";
import QuestionsPage from "@pages/Questions";
import QuestionPage from "@pages/Question";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={RoutesEnum.Home} element={<HomePage />} />
        <Route path={RoutesEnum.Register} element={<RegisterPage />} />
        <Route path={RoutesEnum.Login} element={<LoginPage />} />
        <Route element={<PrivateRouter />}>
          <Route path={RoutesEnum.Profile} element={<ProfilePage />} />
          <Route path={RoutesEnum.Account} element={<AccountPage />} />
          <Route path={`${RoutesEnum.Snippet}/:id`} element={<SnippetPage />} />
          <Route path={RoutesEnum.AddSnippet} element={<AddSnippetPage />} />
          <Route path={RoutesEnum.MySnippets} element={<MySnippetsPage />} />
          <Route path={RoutesEnum.Users} element={<UsersPage />} />
          <Route path={`${RoutesEnum.Users}/:userId`} element={<UserPage />} />
          <Route path={RoutesEnum.Questions} element={<QuestionsPage />} />
          <Route
            path={`${RoutesEnum.Questions}/:questionId`}
            element={<QuestionPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRoutes;
