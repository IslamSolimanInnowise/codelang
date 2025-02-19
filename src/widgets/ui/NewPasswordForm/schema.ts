import { z } from "zod";
import { passwordSchema } from "../LoginForm/schema";

const newPasswordSchema = z
  .object({
    oldPassword: passwordSchema,
    newPassword: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type NewPasswordSchema = z.infer<typeof newPasswordSchema>;

const defaultValues: NewPasswordSchema = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export { newPasswordSchema, defaultValues, type NewPasswordSchema };
