import { z } from "zod";
import { usernameSchema } from "../LoginForm/schema";

const newUsernameSchema = z.object({
  username: usernameSchema,
});

type NewUsernameSchema = z.infer<typeof newUsernameSchema>;

const defaultValues: NewUsernameSchema = { username: "" };

export { newUsernameSchema, defaultValues, type NewUsernameSchema };
