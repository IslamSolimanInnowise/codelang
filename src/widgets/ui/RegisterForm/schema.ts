import { z } from "zod";

const registerFormSchema = z
  .object({
    username: z.string().nonempty("Username required!").min(5, {
      message: "Username must be longer than or equal to 5 characters",
    }),
    password: z
      .string()
      .min(6, {
        message: "Password must be longer than or equal to 6 characters",
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one number and one symbol!",
      }),
    confirmPassword: z
      .string()
      .min(6, {
        message: "Password must be longer than or equal to 6 characters",
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one number and one symbol!",
      }),
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
