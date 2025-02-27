import { Button, Typography } from "@mui/material";
import { AnswerDiv, StyledCorrectIMG } from "./Answer.styles";
import correctIMG from "@shared/assets/correct.svg";
import useAuth from "@widgets/hooks/use-auth";
import useQuestions from "@widgets/hooks/use-questions";

interface AnswerProps {
  id: number;
  content: string;
  isCorrect: boolean;
  user: { username: string };
}

const Answer: React.FC<AnswerProps> = ({
  id,
  content,
  isCorrect,
  user: { username },
}) => {
  const { user: authUser } = useAuth();
  const { removeAnswer, getQuestion, question } = useQuestions();

  const handleDeleteAnswer = async () => {
    if (question) {
      await removeAnswer(id);
      await getQuestion(question.id);
    }
  };

  return (
    <AnswerDiv>
      <Typography variant="body1">{username}</Typography>
      <Typography variant="body2">{content}</Typography>
      {isCorrect && <StyledCorrectIMG src={correctIMG} alt="correct" />}
      {authUser?.username === username && (
        <Button variant="contained" onClick={handleDeleteAnswer}>
          Delete
        </Button>
      )}
    </AnswerDiv>
  );
};
export default Answer;
