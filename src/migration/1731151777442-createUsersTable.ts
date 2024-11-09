import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1731151777442 implements MigrationInterface {
    name = 'CreateUsersTable1731151777442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "age"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" ADD "age" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
