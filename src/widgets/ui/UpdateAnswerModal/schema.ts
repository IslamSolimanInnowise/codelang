import { z } from "zod";

const updateAnswerSchema = z.object({
  content: z.string().nonempty("Answer required!"),
});

type UpdateAnswerSchema = z.infer<typeof updateAnswerSchema>;

const defaultValues: UpdateAnswerSchema = { content: "" };

export { updateAnswerSchema, defaultValues, type UpdateAnswerSchema };
