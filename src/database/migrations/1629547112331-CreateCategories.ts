import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1629547112331 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "categories",
          columns: [
            {
              name: "id",
              type: "binary",
              isPrimary: true
            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "description",
              type: "varchar"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("categories");
    }

}
