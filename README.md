# NodeJS Migration Tool

This project is intended exclusively to run migrations on Database.

Every time a change is required in the database structure (ie. table creation, table change, column created, column changed, column drop, table drop, etc) a migration should be created to perform that change automatically.

When the project is deployed to dev / master all the migrations are runned in the database automatically.

This project is also serverless ready, it uses serverless framework, just replace values in serverless.yml with your
Security Groups, VPCs and region and you are done!

## Instructions to create a migration

Use command:

```npm run db-create-migration```

A new migration will me added to the project inside the folder src/migrations with correct timestamp

You should rename your migration name to be clear on what your migration is changing but you should **keep** the timestamp  in file name and in the class name otherwise the migration execution will fail.

## What your migration should have

Two functions **up** and **down**. Up is the function that will be runned when the migration run. Down is the code to revert the change in case we need to undo that change. **Please** always code both the up and down function.

Use **query runner syntax** to avoid writting specific database code, meaning that our architecture will always remain agnostic.

## Running the migrations

You should **never** run migrations manually, so never execute the command that run the migration. The migration will get executed **automatically** when the project got build on the CI/CD process.