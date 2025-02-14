import { z } from "zod";
import { loginFormSchema, passwordSchema } from "../LoginForm/schema";

const registerFormSchema = loginFormSchema
  .extend({
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterSchema = z.infer<typeof registerFormSchema>;

const defaultValues: RegisterSchema = {
  username: "",
  password: "",
  confirmPassword: "",
};

export { defaultValues, type RegisterSchema, registerFormSchema };
