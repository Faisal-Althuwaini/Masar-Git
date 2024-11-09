import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731165363060 implements MigrationInterface {
    name = 'Migration1731165363060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "items"`);
    }

}
