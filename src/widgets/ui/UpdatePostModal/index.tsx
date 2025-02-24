import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  defaultValues,
  newPostSchema,
  NewPostSchema,
  programmingLanguages,
} from "../NewPostForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledSelect, StyledTextArea } from "./UpdatePostModal.styles";
import useSnippets from "@widgets/hooks/use-snippets";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@shared/routes";

interface UpdatePostProps {
  open: boolean;
  onClose: () => void;
  postId: number;
}

const UpdatePostModal: React.FC<UpdatePostProps> = ({
  open,
  onClose,
  postId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPostSchema>({
    mode: "all",
    resolver: zodResolver(newPostSchema),
    defaultValues,
  });

  const navigate = useNavigate();
  const { editSnippet, getSnippet } = useSnippets();

  const onSubmit = handleSubmit(async (data) => {
    await editSnippet({ ...data, id: postId }).unwrap();
    onClose();
    await getSnippet(postId).unwrap();
    navigate(`${RoutesEnum.Snippet}/${postId}`);
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Your Post</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <FormControl fullWidth>
            <InputLabel id="language">Language</InputLabel>
            <StyledSelect
              labelId="language"
              {...register("language")}
              error={Boolean(errors.language)}
              defaultValue={defaultValues.language}
              variant="outlined"
            >
              {programmingLanguages.map((lang) => {
                return (
                  <MenuItem value={lang} key={lang}>
                    {lang}
                  </MenuItem>
                );
              })}
            </StyledSelect>
            <FormHelperText>{errors.language?.message}</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal" error={Boolean(errors.code)}>
            <StyledTextArea
              {...register("code")}
              label="Code"
              variant="outlined"
              multiline
              rows={8}
              placeholder="Write your code snippet here..."
              error={Boolean(errors.code)}
              helperText={errors.code?.message}
            />
          </FormControl>
          <Button type="submit">Confirm</Button>
          <Button onClick={onClose}>Cancel</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default UpdatePostModal;
