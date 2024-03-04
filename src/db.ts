import { Pool } from "pg";

const connectionString =
  "postgres://hcdfwtmv:XZ88dfjU-_ps7DLe4qNsEfWwUUAus4ZV@motty.db.elephantsql.com/hcdfwtmv";

const db = new Pool({ connectionString });

export default db;
