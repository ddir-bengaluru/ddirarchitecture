import express from "express";
// MongoDB
import db from "../db/connection.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("projects");
  let results = await collection.find({}).toArray();
  res.status(200).send(results);
});

router.get("/allClients", async (req, res) => {
  let collection = await db.collection("projects");
  let clients = new Set();
  let results = await collection.find({}).project({_id: 0, client_name: 1}).toArray();
  results.forEach(client => {
    if(client?.client_name) {
      clients.add(client?.client_name);
    }
  });
  results = [...clients]
  res.send(results).status(200);
});

router.get("/:name", async (req, res) => {
  let collection = await db.collection("projects");
  let query = {name: req.params.name};
  let result = await collection.findOne(query);

  if (!result) res.sendStatus(404);
  else res.send(result).status(200);
});

router.get("/category/:name", async (req, res) => {
  let collection = await db.collection("projects");
  let query = {category: req.params.name};
  let results = await collection.find(query).toArray();

  if(!results.length) res.send([]).status(404);
  else res.send(results).status(200);
});

router.get("/art/:name", async (req, res) => {
  let art = await db.collection("art");
  let query = {name: req.params.name};
  let results = await art.findOne(query);

  if(!results) {
    res.status(404).send([]);
  }
  else {
    res.status(200).send(results);
  }
});

router.get("/search/:name", async (req, res) =>{
  const results = [];
  let searchTerm = req.params.name;
  let projects = await db.collection("projects");
  let art = await db.collection("art");
  const projectResults = await projects.
  find({
    $or: [
      {name: {$regex: searchTerm, $options: 'i'}},
      {location: {$regex: searchTerm, $options: 'i'}},
      {client_name: {$regex: searchTerm, $options: 'i'}},
    ]
  }).toArray();
  const artResults = await art.find({name: {$regex: searchTerm, $options: 'i'}}).toArray();
  results.push(...projectResults, ...artResults);

  if (!results.length) res.send([]).status(404);
  else res.send(results).status(200)
});

// Add To MongoDocument 
// router.post("/", async (req, res) => {
//   let newDocument = {
//     name: req.body.name,
//     location: req.body.location,
//   };
//   let collection = await db.collection("projects");
//   let result = await collection.insertOne(newDocument);
//   res.send(result).status(204);
// });


// Get DB MongoDocument
// router.get('/', async(req, res) => {
//   let snapshot = await app.get();
//   res.send(snapshot).status(200);
// })

export default router;








// Firebase
// import { collection, getDocs, query, where } from "firebase/firestore"; 
// router.get('/', async(req, res) => {
//   const querySnapshot = await getDocs(collection(db, "projects"));
//   let results = [];
//   querySnapshot.forEach((doc) => {
//     results.push(doc.data());
//   });

//   if(!results) res.send('No Data').status(404);
//   else res.send(results).status(200);
// });

// router.get('/:name', async(req, res) => {
//   const projectRef = collection(db, "projects");
//   let q = query(projectRef, where("name","==",req.params.name));
//   const querySnapshot = await getDocs(q);
//   let result = {};
//   querySnapshot.forEach(doc => {
//     result = doc.data();
//   });

//   if (!result) res.send({}).status(404);
//   else res.send(result).status(200);
// });

// router.get("/category/:name", async (req, res) => {
//   const projectRef = collection(db, "projects");
//   let q = query(projectRef, where("category","==",req.params.name));
//   const querySnapshot = await getDocs(q);
//   let results = [];
//   querySnapshot.forEach(doc => {
//     results.push(doc.data());
//   });

//   if (!results?.length) res.send([]).status(404);
//   else res.send(results).status(200);
// });

// router.get("/search/:name", async (req, res) =>{
//   const projectRef = collection(db, "projects");
//   const querySnapshot = await getDocs(projectRef);
//   let results = [];
//   querySnapshot.forEach(doc => {
//     let nameKey = doc.data().name.toLowerCase();
//     let clientNameKey = doc.data().client_name.toLowerCase();
//     let searchQuery = req.params.name.toLowerCase();
//     if(nameKey.includes(searchQuery) || clientNameKey.includes(searchQuery)) {
//       results.push(doc.data());
//     }
//   })

//   if (!results.length) res.send([]).status(404);
//   else res.send(results).status(404);
// });

// router.get("/art/:name", async(req, res) => {
//   const projectRef = collection(db, "art");
//   let q = query(projectRef, where("name","==",req.params.name));
//   const querySnapshot = await getDocs(q);
//   let result = {};
//   querySnapshot.forEach(doc => {
//     result = doc.data();
//   })

//   if(!result) res.send({}).status(404);
//   else res.send(result).status(200);
// });
