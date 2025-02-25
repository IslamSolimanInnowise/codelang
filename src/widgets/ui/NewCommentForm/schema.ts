import { z } from "zod";

const commentFormSchema = z.object({
  content: z.string().nonempty("Comment required!"),
});

type CommentSchema = z.infer<typeof commentFormSchema>;

const defaultValues: CommentSchema = { content: "" };

export { commentFormSchema, defaultValues, type CommentSchema };
