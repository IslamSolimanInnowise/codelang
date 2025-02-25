import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from "@mui/material";
import {
  defaultValues,
  newPostSchema,
  NewPostSchema,
  programmingLanguages,
} from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledSelect, StyledTextArea } from "./NewPostForm.styles";
import useSnippets from "@widgets/hooks/use-snippets";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@shared/routes";

const NewPostForm: React.FC = () => {
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
  const { addNewSnippet } = useSnippets();

  const onSubmit = handleSubmit(async (data) => {
    const response = await addNewSnippet(data).unwrap();
    navigate(`${RoutesEnum.Snippet}/${response.id}`);
  });

  return (
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
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};
export default NewPostForm;
