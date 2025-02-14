import { z } from "zod";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
const minPasswordLength = 6;
const minUsernameLength = 5;

const passwordSchema = z
  .string()
  .regex(passwordPattern, {
    message:
      "Password must contain at least one lowercase letter, one uppercase letter, one number and one symbol!",
  })
  .min(minPasswordLength, {
    message: "Password must be longer than or equal to 6 characters",
  });

const loginFormSchema = z.object({
  username: z.string().nonempty("Username required!").min(minUsernameLength, {
    message: "Username must be longer than or equal to 5 characters",
  }),
  password: passwordSchema,
});

type LoginSchema = z.infer<typeof loginFormSchema>;

const defaultValues: LoginSchema = {
  username: "",
  password: "",
};

export { defaultValues, type LoginSchema, loginFormSchema, passwordSchema };
