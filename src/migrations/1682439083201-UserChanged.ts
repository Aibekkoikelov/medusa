import { MigrationInterface, QueryRunner } from "typeorm"

export class UserChanged1682439083201 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

       // add column "name" to table "post"
         await queryRunner.query(`CREATE TABLE "temporary_post" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "name" varchar NOT NULL)`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
