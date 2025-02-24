import Input from "@shared/ui/Input/Input";
import { StyledCommentForm } from "./NewCommentForm.styles";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { commentFormSchema, CommentSchema, defaultValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useSnippets from "@widgets/hooks/use-snippets";

const NewCommentForm: React.FC = () => {
  const { addNewComment, snippet, getUsersOneSnippet } = useSnippets();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentSchema>({
    mode: "all",
    resolver: zodResolver(commentFormSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async ({ content }) => {
    await addNewComment({ content, snippetId: snippet!.id });
    await getUsersOneSnippet(snippet!.id);
  });

  return (
    <StyledCommentForm onSubmit={onSubmit}>
      <Input
        {...register("content")}
        variant="filled"
        placeholder="add a new comment"
        fullWidth
        label="New Comment"
        error={Boolean(errors.content)}
        helperText={errors.content?.message}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </StyledCommentForm>
  );
};
export default NewCommentForm;
