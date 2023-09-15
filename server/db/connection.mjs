import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADXZWrMkri7MbGCRBw_GC5KAvLoa6cDik",
  authDomain: "ddir-architecture.firebaseapp.com",
  databaseURL: "https://ddir-architecture-default-rtdb.firebaseio.com",
  projectId: "ddir-architecture",
  storageBucket: "ddir-architecture.appspot.com",
  messagingSenderId: "752433612296",
  appId: "1:752433612296:web:69b0f75276f7700dba73bd"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;





// import { MongoClient } from "mongodb";

// const connectionString = "mongodb+srv://ddirbengaluru:ddirProject%40123@ddir-db.qts5bui.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(connectionString, {useUnifiedTopology: true});

// let conn;
// try {
//   conn = await client.connect();
//   console.log("DB CONNECTED")
// } catch(e) {
//   console.error(e);
// }

// let db = conn.db("ddir-db");

// export default db;


