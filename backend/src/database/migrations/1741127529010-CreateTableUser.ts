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
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "doc",
                        type: "varchar",
                        isUnique: true,
                        isNullable: true
                    },
                    {
                        name: "birth",
                        type: "integer",
                        isNullable: true
                    },
                    {
                        name: "death",
                        type: "integer",
                        isNullable: true
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "address",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "city",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "state",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "zipcode",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "country",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "gender",
                        type: "enum",
                        enum: ["male", "female"],
                        isNullable: true
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "avatar",
                        type: "varchar",
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
