import { z } from "zod";

const addAnswerSchema = z.object({
  content: z.string().nonempty("Content required!"),
});

type AddAnswerSchema = z.infer<typeof addAnswerSchema>;

const defaultValues: AddAnswerSchema = {
  content: "",
};

export { addAnswerSchema, defaultValues, type AddAnswerSchema };
