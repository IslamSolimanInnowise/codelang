import { z } from "zod";

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C/C++",
  "C#",
  "Go",
  "Kotlin",
  "Ruby",
] as const;

const newPostSchema = z.object({
  code: z.string().nonempty("Code required!"),
  language: z.enum(programmingLanguages),
});

type NewPostSchema = z.infer<typeof newPostSchema>;

const defaultValues: NewPostSchema = { code: "", language: "JavaScript" };

export {
  newPostSchema,
  defaultValues,
  programmingLanguages,
  type NewPostSchema,
};
