import { z } from "zod";

const genderSchema = z.enum(["male", "female"]).nullable().optional();
const accountSchema = z.enum(["normal", "premium"]);

const UserSchema = z.object({
    id: z.string().uuid().optional(),
    login_id: z.string(),
    name: z.string().max(100),
    email: z.string().email().max(100),
    password: z.string().max(255),
    doc: z.string().max(14).nullable().optional(),
    birth: z.date().nullable().optional(),
    phone: z.string().max(15).nullable().optional(),
    address: z.string().max(100).nullable().optional(),
    city: z.string().max(100).nullable().optional(),
    state: z.string().max(100).nullable().optional(),
    zipcode: z.string().max(8).nullable().optional(),
    country: z.string().max(50).nullable().optional(),
    gender: genderSchema,
    active: z.boolean().default(true),
    avatar: z.string().max(255).nullable().optional(),
    account: accountSchema.default("normal"),
    created_at: z.date().default(new Date()),
    updated_at: z.date().default(new Date())
});

export type UserProps = z.infer<typeof UserSchema>;