import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductChanged1682581642176 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\"" +
            " ADD COLUMN \"myCustomField\" text"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\" DROP COLUMN \"myCustomField\""
        )
    }

}
