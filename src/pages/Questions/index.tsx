import Aside from "@widgets/ui/Aside";
import { PageContent, PageMain } from "./Questions.styles";
import useQuestions from "@widgets/hooks/use-questions";
import Spinner from "@shared/ui/Spinner";
import { useEffect } from "react";
import QuestionBox from "@widgets/ui/QuestionBox";

const QuestionsPage: React.FC = () => {
  const { currentPage, getQuestions, isLoading, questions } = useQuestions();

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
        {questions.map((q) => {
          return <QuestionBox {...q} key={q.id} />;
        })}
      </PageContent>
    </PageMain>
  );
};
export default QuestionsPage;
