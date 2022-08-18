import  * as dotenv from 'dotenv'
const result = dotenv.config();

module.exports = {
	name: "default",
	type: "postgres",
	host: process.env.DB_PGHOST,
	port: parseInt(process.env.DB_PGPORT),
	username: process.env.DB_PGUSER,
	password: process.env.DB_PGPASSWORD,
	database: process.env.DB_PGDATABASE,
	entities: [],
	migrations: [
		"src/migrations/**/*.ts",
		"src/migrations/**/*.js"
	],
	synchronize: false,
	cli: {
        migrationsDir: "src/migrations"
    }
}