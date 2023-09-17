import express from "express";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import db from "../db/connection.mjs";

const router = express.Router();

router.get('/', async(req, res) => {
  const querySnapshot = await getDocs(collection(db, "projects"));
  let results = [];
  querySnapshot.forEach((doc) => {
    results.push(doc.data());
  });

  if(!results) res.send('No Data').status(404);
  else res.send(results).status(200);
});

router.get('/:name', async(req, res) => {
  const projectRef = collection(db, "projects");
  let q = query(projectRef, where("name","==",req.params.name));
  const querySnapshot = await getDocs(q);
  let result = {};
  querySnapshot.forEach(doc => {
    result = doc.data();
  });

  if (!result) res.send([]).status(404);
  else res.send(result).status(200);
});

router.get("/category/:name", async (req, res) => {
  const projectRef = collection(db, "projects");
  let q = query(projectRef, where("category","==",req.params.name));
  const querySnapshot = await getDocs(q);
  let results = [];
  querySnapshot.forEach(doc => {
    results.push(doc.data());
  });

  if (!results?.length) res.send([]).status(404);
  else res.send(results).status(200);
});

router.get("/search/:name", async (req, res) =>{
  const projectRef = collection(db, "projects");
  const querySnapshot = await getDocs(projectRef);
  let results = [];
  querySnapshot.forEach(doc => {
    let nameKey = doc.data().name.toLowerCase();
    let clientNameKey = doc.data().client_name.toLowerCase();
    let searchQuery = req.params.name.toLowerCase();
    if(nameKey.includes(searchQuery) || clientNameKey.includes(searchQuery)) {
      results.push(doc.data());
    }
  })

  if (!results.length) res.send([]).status(404);
  else res.send(results).status(404);
});

router.get("/art/:name", async(req, res) => {
  const projectRef = collection(db, "art");
  let q = query(projectRef, where("name","==",req.params.name));
  const querySnapshot = await getDocs(q);
  let results = [];
  querySnapshot.forEach(doc => {
    results.push(doc.data());
  })

  if(!results.length) res.send([]).status(404);
  else res.send(results).status(200);
});

export default router;








// router.get("/", async (req, res) => {
//   let collection = await db.collection("projects");
//   let results = await collection.find({}).toArray();
//   res.send(results).status(200);
// });

// router.get("/:name", async (req, res) => {
//   let collection = await db.collection("projects");
//   let query = {name: req.params.name};
//   let result = await collection.findOne(query);

//   if (!result) res.sendStatus(404);
//   else res.send(result).status(200);
// });

// router.get("/category/:name", async (req, res) => {
//   let collection = await db.collection("projects");
//   let query = {category: req.params.name};
//   let result = await collection.find(query).toArray();

//   if(!result) res.send("No Data").status(404);
//   else res.send(result).status(200);
// });

// router.post("/", async (req, res) => {
//   let newDocument = {
//     name: req.body.name,
//     location: req.body.location,
//   };
//   let collection = await db.collection("projects");
//   let result = await collection.insertOne(newDocument);
//   res.send(result).status(204);
// });



// router.get("/", async (req, res) => {
//   let collection = await db.collection("projects");
//   let results = await collection.find({}).toArray();
//   res.send(results).status(200);
// });

// router.get('/', async(req, res) => {
//   let snapshot = await app.get();
//   res.send(snapshot).status(200);
// })
