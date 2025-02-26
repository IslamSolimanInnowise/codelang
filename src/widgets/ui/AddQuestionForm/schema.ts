import { z } from "zod";

const addQuestionSchema = z.object({
  title: z.string().nonempty("Title required!"),
  description: z.string().nonempty("Description required!"),
  attachedCode: z.string().nonempty("Attached Code required!"),
});

type AddQuestionSchema = z.infer<typeof addQuestionSchema>;

const defaultValues: AddQuestionSchema = {
  title: "",
  description: "",
  attachedCode: "",
};

export { addQuestionSchema, defaultValues, type AddQuestionSchema };
