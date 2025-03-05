import { z } from "zod";

enum GenderRole {
    MALE    = "male",
    FEMALE  = "female"
}

const genderSchema = z.string()
    .refine((value) => Object.values(GenderRole).includes(value as GenderRole),
    { message: "O valor deve ser 'male' ou 'female'"})
    .nullable()
    .optional();

const accountSchema = z.enum(["normal", "premium"]).default("normal");

const BirthDateSchema = z.number()
    .int("O timestamp deve ser um número inteiro")
    .min(0, "O timestamp não pode ser negativo")
    .refine((timestamp) => {
        const date = new Date(timestamp);
        return !isNaN(date.getTime());
    }, {
        message: "Timestamp inválido",
    })
    .refine((timestamp) => {
        const date = new Date(timestamp);
        return date < new Date();
    }, {
        message: "A data de nascimento deve ser no passado",
    }).optional();

const DeathDateSchema = z.number()
    .int("O timestamp deve ser um número inteiro")
    .min(0, "O timestamp não pode ser negativo")
    .refine((timestamp) => {
        const date = new Date(timestamp);
        return !isNaN(date.getTime());
    }, {
        message: "Timestamp inválido, envie ",
    })
    .optional();

const ActiveSchema = z.boolean({
        invalid_type_error: "O valor deve ser 'true' ou 'false'",
    }).optional();

const UserSchema = z.object({
    id: z.string().uuid().optional(),
    login_id: z.string(),
    name: z.string().max(100),
    email: z.string().email().max(100),
    password: z.string().min(8).max(255),
    doc: z.string().max(14).nullable().optional(),
    birth: BirthDateSchema,
    death: DeathDateSchema,
    phone: z.string().max(15).nullable().optional(),
    address: z.string().max(100).nullable().optional(),
    city: z.string().max(100).nullable().optional(),
    state: z.string().max(100).nullable().optional(),
    zipcode: z.string().max(9).nullable().optional(),
    country: z.string().max(50).nullable().optional(),
    gender: genderSchema,
    active: ActiveSchema,
    avatar: z.string().max(255).refine((active) => typeof(active) ).nullable().optional(),
    account: accountSchema.default("normal"),
    created_at: z.date().default(new Date()),
    updated_at: z.date().default(new Date())
});

const UpdateUserSchema = z.object({
    name: z.string().max(100).optional(),
    doc: z.string().min(11, "Tamanho mínimo de 11 caracteres...").max(14).nullable().optional(),
    birth: BirthDateSchema,
    death: DeathDateSchema,
    phone: z.string().max(14, "Tamanho maximo de 14 caracteres...").transform(phone => phone.replace(/\D+/g, "")).nullable().optional(),
    address: z.string().max(100).nullable().optional(),
    city: z.string().max(100).nullable().optional(),
    state: z.string().max(100).nullable().optional(),
    zipcode: z.string().max(9, "Tamanho maximo de 8 caracteres...").nullable().optional(),
    country: z.string().max(50).nullable().optional(),
    gender: genderSchema,
    active: ActiveSchema,
    avatar: z.string().max(255).nullable().optional()
});

export type UserProps = z.infer<typeof UserSchema>;
export default UpdateUserSchema;