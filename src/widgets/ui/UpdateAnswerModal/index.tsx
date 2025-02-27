import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import Input from "@shared/ui/Input/Input";
import { useForm } from "react-hook-form";
import {
  defaultValues,
  updateAnswerSchema,
  UpdateAnswerSchema,
} from "./schema";
import useQuestions from "@widgets/hooks/use-questions";

interface UpdateAnswerProps {
  open: boolean;
  onClose: () => void;
  answerId: number;
}

const UpdateAnswerModal: React.FC<UpdateAnswerProps> = ({
  answerId,
  open,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateAnswerSchema>({
    mode: "all",
    resolver: zodResolver(updateAnswerSchema),
    defaultValues,
  });

  const { editAnswer, question, getQuestion } = useQuestions();

  const onSubmit = handleSubmit(async (data) => {
    if (question) {
      await editAnswer({ ...data, answerId });
      await getQuestion(question.id);
      onClose();
    }
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Your Answer</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <Input
            {...register("content")}
            variant="filled"
            placeholder="update your comment"
            fullWidth
            label="Edit Comment"
            error={Boolean(errors.content)}
            helperText={errors.content?.message}
          />
          <Button type="submit">Confirm</Button>
          <Button onClick={onClose}>Cancel</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default UpdateAnswerModal;
