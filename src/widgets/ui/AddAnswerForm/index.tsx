import { useForm } from "react-hook-form";
import { addAnswerSchema, AddAnswerSchema, defaultValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import Input from "@shared/ui/Input/Input";
import { StyledForm } from "./AddAnswerForm.styles";
import useQuestions from "@widgets/hooks/use-questions";

const AddAnswerForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddAnswerSchema>({
    defaultValues,
    mode: "all",
    resolver: zodResolver(addAnswerSchema),
  });

  const { submitAnswer, question, getQuestion } = useQuestions();

  const onSubmit = handleSubmit(async (data) => {
    if (question) {
      await submitAnswer({ ...data, questionId: question.id });
      await getQuestion(question.id);
    }
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        {...register("content")}
        variant="filled"
        label="Content"
        placeholder="Title"
        error={Boolean(errors.content)}
        helperText={errors.content?.message}
      />
      <Button variant="contained" type="submit">
        Add an answer
      </Button>
    </StyledForm>
  );
};
export default AddAnswerForm;
