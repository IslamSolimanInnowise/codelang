import Aside from "@widgets/ui/Aside";
import { PageContent, PageMain, StyledPagination } from "./Questions.styles";
import useQuestions from "@widgets/hooks/use-questions";
import Spinner from "@shared/ui/Spinner";
import { useEffect } from "react";
import QuestionBox from "@widgets/ui/QuestionBox";
import AddQuestionForm from "@widgets/ui/AddQuestionForm";

const QuestionsPage: React.FC = () => {
  const {
    currentPage,
    getQuestions,
    isLoading,
    questions,
    totalPages,
    changePage,
  } = useQuestions();

  useEffect(() => {
    getQuestions({ currentPage });
  }, [getQuestions, currentPage]);

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
        <h2>Welcome to the questions page</h2>
        <AddQuestionForm />
        {questions.map((q) => {
          return <QuestionBox {...q} key={q.id} />;
        })}
        <StyledPagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </PageContent>
    </PageMain>
  );
};
export default QuestionsPage;
