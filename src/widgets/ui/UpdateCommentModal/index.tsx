import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import Input from "@shared/ui/Input/Input";
import { useForm } from "react-hook-form";
import {
  commentFormSchema,
  CommentSchema,
  defaultValues,
} from "@widgets/ui/NewCommentForm/schema";
import useSnippets from "@widgets/hooks/use-snippets";

interface UpdateCommentProps {
  open: boolean;
  onClose: () => void;
  commentId: number;
}
const UpdateCommentModal: React.FC<UpdateCommentProps> = ({
  open,
  onClose,
  commentId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentSchema>({
    mode: "all",
    resolver: zodResolver(commentFormSchema),
    defaultValues,
  });

  const { editComment, getUsersOneSnippet, snippet } = useSnippets();

  const onSubmit = handleSubmit(async (data) => {
    await editComment({ ...data, id: commentId });
    await getUsersOneSnippet(snippet!.id);
    onClose();
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Your Comment</DialogTitle>
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
export default UpdateCommentModal;
