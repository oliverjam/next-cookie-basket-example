import pg from "pg";

const options = {
  connectionString: "postgres://next_example:@localhost:5432/next_example",
};

const db = new pg.Pool(options);

export default db;
