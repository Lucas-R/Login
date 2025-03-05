import { DataSource } from "typeorm";
import { join } from "path";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const connectionDB = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: false,
    logging: true,
    entities: [join(__dirname , "../entities/**/*.{ts,js}")],
    migrations: [join(__dirname,  "../migrations/**/*.{ts,js}")],
    subscribers: [join(__dirname,  "../subscribers/**/*.{ts,js}")]
}); 