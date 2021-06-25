import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class alterAddUserPassword1624581461300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "passsword",
                type: "varchar",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "passsword")
    }

}
