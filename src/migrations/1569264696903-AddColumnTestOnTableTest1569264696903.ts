import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnTestOnTableTest1569264696903 implements MigrationInterface {

	tableName: string = 'schema.table';
	columnName: string = 'column_name_test';

	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.addColumn(this.tableName,
			new TableColumn({
				name: this.columnName,
				type: 'timestamptz',
				isNullable: true
			}));
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropColumn(this.tableName, this.columnName);
	}

}
