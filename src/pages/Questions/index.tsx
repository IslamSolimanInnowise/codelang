import Aside from "@widgets/ui/Aside";
import { PageContent, PageMain } from "./Questions.styles";
import useQuestions from "@widgets/hooks/use-questions";
import Spinner from "@shared/ui/Spinner";
import { useEffect } from "react";

const QuestionsPage: React.FC = () => {
  const { currentPage, getQuestions, isLoading } = useQuestions();

  useEffect(() => {
    getQuestions({ currentPage });
  }, [getQuestions, currentPage]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PageMain>
      <Aside />
      <PageContent>
        <h1>Welcome to the questions page</h1>
      </PageContent>
    </PageMain>
  );
};
export default QuestionsPage;
