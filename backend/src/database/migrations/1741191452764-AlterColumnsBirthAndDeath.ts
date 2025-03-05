import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterColumnsBirthAndDeath1741191452764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            'user',
            'birth',
            new TableColumn({
                name: 'birth',
                type: 'bigint',
                isNullable: true
            }),
        );

        await queryRunner.changeColumn(
            'user',
            'death',
            new TableColumn({
                name: 'death',
                type: 'bigint',
                isNullable: true
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            'user',
            'birth',
            new TableColumn({
                name: 'birth',
                type: 'integer',
                isNullable: true
            }),
        );

        // Reverte a coluna "death" para integer
        await queryRunner.changeColumn(
            'user',
            'death',
            new TableColumn({
                name: 'death',
                type: 'integer',
                isNullable: true
            }),
        );
    }

}
