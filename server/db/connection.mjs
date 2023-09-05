import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://ddirbengaluru:ddirProject%40123@ddir-db.qts5bui.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString, {useUnifiedTopology: true});

let conn;
try {
  conn = await client.connect();
  console.log("DB CONNECTED")
} catch(e) {
  console.error(e);
}

let db = conn.db("ddir-db");

export default db;