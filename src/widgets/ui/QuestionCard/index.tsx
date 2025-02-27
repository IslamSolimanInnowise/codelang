import { Question } from "@features/questions/questions.types";
import { Button, Typography } from "@mui/material";
import {
  AnswerDiv,
  AnswersContainer,
  QuestionUserDiv,
  StyledCard,
} from "./QuestionCard.styles";
import useAuth from "@widgets/hooks/use-auth";
import useQuestions from "@widgets/hooks/use-questions";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@shared/routes";

const QuestionCard: React.FC<Question> = ({
  title,
  description,
  attachedCode,
  answers,
  id,
  isResolved,
  user,
}) => {
  const { user: authUser } = useAuth();
  const { removeQuestion } = useQuestions();
  const navigate = useNavigate();

  const handleRemovingQuestion = () => {
    removeQuestion(id);
    navigate(RoutesEnum.Questions);
  };

  return (
    <StyledCard>
      <Typography variant="h6" gutterBottom>
        Title: {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Description: {description}
      </Typography>
      <Typography>Attached code: {attachedCode}</Typography>
      <QuestionUserDiv>
        <Typography variant="caption">Posted by: {user.username}</Typography>
        <Typography variant="caption">
          Status: {isResolved ? "Resolved" : "Unresolved"}
        </Typography>
      </QuestionUserDiv>
      {authUser?.username === user.username && (
        <Button variant="contained" onClick={handleRemovingQuestion}>
          Delete
        </Button>
      )}
      {answers.length > 0 && (
        <AnswersContainer>
          <Typography variant="h6" gutterBottom>
            Answers:
          </Typography>
          {answers.map((answer) => (
            <AnswerDiv key={answer.id}>
              <Typography variant="body2">{answer.content}</Typography>
            </AnswerDiv>
          ))}
        </AnswersContainer>
      )}
    </StyledCard>
  );
};

export default QuestionCard;
