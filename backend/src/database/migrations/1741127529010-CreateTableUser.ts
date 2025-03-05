import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1741127529010 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "login_id",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "doc",
                        type: "varchar",
                        length: "14",
                        isNullable: true,
                        isUnique: true
                    },
                    {
                        name: "birth",
                        type: "date",
                        isNullable: true
                    },
                    {
                        name: "death",
                        type: "date",
                        isNullable: true
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "15",
                        isNullable: true
                    },
                    {
                        name: "address",
                        type: "varchar",
                        length: "100",
                        isNullable: true
                    },
                    {
                        name: "city",
                        type: "varchar",
                        length: "100",
                        isNullable: true
                    },
                    {
                        name: "state",
                        type: "varchar",
                        length: "100",
                        isNullable: true
                    },
                    {
                        name: "zipcode",
                        type: "varchar",
                        length: "8",
                        isNullable: true
                    },
                    {
                        name: "country",
                        type: "varchar",
                        length: "50",
                        isNullable: true
                    },
                    {
                        name: "gender",
                        type: "enum",
                        isNullable: true,
                        enum: ["male", "female"]
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "avatar",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "account",
                        type: "enum",
                        enum: ["premium", "normal"],
                        default: "'normal'"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP"
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
        await queryRunner.query(`DROP EXTENSION IF EXISTS "uuid-ossp"`);
    }
}
