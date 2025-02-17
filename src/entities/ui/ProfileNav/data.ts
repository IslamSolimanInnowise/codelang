import { RoutesEnum } from "@shared/routes";
import homeIMG from "@shared/assets/home.svg";
import accountIMG from "@shared/assets/account.svg";
import snippetIMG from "@shared/assets/snippet.svg";
import question from "@shared/assets/question.svg";
import users from "@shared/assets/users.svg";

export const profileNavData = [
  { linkText: "Home", to: RoutesEnum.Home, src: homeIMG },
  { linkText: "My Account", to: RoutesEnum.Home, src: accountIMG },
  { linkText: "Post snippet", to: RoutesEnum.Home, src: snippetIMG },
  { linkText: "My snippets", to: RoutesEnum.Home, src: snippetIMG },
  { linkText: "Questions", to: RoutesEnum.Home, src: question },
  { linkText: "Users", to: RoutesEnum.Home, src: users },
];
