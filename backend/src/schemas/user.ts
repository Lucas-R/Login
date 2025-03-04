import { z } from "zod"

const UserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string()
});

export type UserProps = z.infer<typeof UserSchema>;