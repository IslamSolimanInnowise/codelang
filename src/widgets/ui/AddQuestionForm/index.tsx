import { useForm } from "react-hook-form";
import { addQuestionSchema, AddQuestionSchema, defaultValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@shared/ui/Input/Input";
import { Button } from "@mui/material";
import useQuestions from "@widgets/hooks/use-questions";
import { StyledForm } from "./AddQuestionForm.styles";

const AddQuestionForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddQuestionSchema>({
    defaultValues,
    mode: "all",
    resolver: zodResolver(addQuestionSchema),
  });

  const { addNewQuestion, getQuestions, currentPage } = useQuestions();

  const onSubmit = handleSubmit(async (data) => {
    await addNewQuestion(data);
    await getQuestions({ currentPage });
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        {...register("title")}
        variant="filled"
        label="Title"
        placeholder="Title"
        error={Boolean(errors.title)}
        helperText={errors.title?.message}
      />
      <Input
        {...register("description")}
        variant="filled"
        label="Description"
        placeholder="Description"
        error={Boolean(errors.description)}
        helperText={errors.description?.message}
      />
      <Input
        {...register("attachedCode")}
        variant="filled"
        label="Attached Code"
        placeholder="Attached Code"
        error={Boolean(errors.attachedCode)}
        helperText={errors.attachedCode?.message}
      />
      <Button variant="contained" type="submit">
        Add a new question
      </Button>
    </StyledForm>
  );
};
export default AddQuestionForm;
