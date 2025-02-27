import Aside from "@widgets/ui/Aside";
import { PageContent, PageMain } from "./Question.styles";
import { useParams } from "react-router";
import useQuestions from "@widgets/hooks/use-questions";
import { useEffect } from "react";
import Spinner from "@shared/ui/Spinner";
import QuestionCard from "@widgets/ui/QuestionCard";

const QuestionPage: React.FC = () => {
  const params = useParams();
  const { question, getQuestion, isLoading } = useQuestions();

  useEffect(() => {
    getQuestion(Number(params.questionId));
  }, [getQuestion, params.questionId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PageMain>
      <Aside />
      <PageContent>{question && <QuestionCard {...question} />}</PageContent>
    </PageMain>
  );
};
export default QuestionPage;
