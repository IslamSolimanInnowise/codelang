import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import useQuestions from "@widgets/hooks/use-questions";
import {
  type AddQuestionSchema,
  addQuestionSchema,
  defaultValues,
} from "@widgets/ui/AddQuestionForm/schema";
import { useForm } from "react-hook-form";
import { ButtonsContainer, StyledForm } from "./UpdateQuestionModal.styles";
import Input from "@shared/ui/Input/Input";

interface UpdateQuestionProps {
  open: boolean;
  onClose: () => void;
  questionId: number;
}

const UpdateQuestionModal: React.FC<UpdateQuestionProps> = ({
  open,
  onClose,
  questionId,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddQuestionSchema>({
    defaultValues,
    mode: "all",
    resolver: zodResolver(addQuestionSchema),
  });

  const { editQuestion, getQuestion } = useQuestions();

  const onSubmit = handleSubmit(async (data) => {
    await editQuestion({ ...data, id: questionId });
    onClose();
    await getQuestion(questionId);
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Your Post</DialogTitle>
      <DialogContent>
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
          <ButtonsContainer>
            <Button type="submit">Confirm</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ButtonsContainer>
        </StyledForm>
      </DialogContent>
    </Dialog>
  );
};
export default UpdateQuestionModal;
