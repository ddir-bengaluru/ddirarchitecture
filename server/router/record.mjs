import express from "express";
import db from "../db/connection.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("projects");
  let results = await collection.find({}).toArray();
  res.status(200).send(results);
});

router.get("/allClients", async (req, res) => {
  let collection = await db.collection("clients");
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

router.get("/team", async (req, res) => {
  let collection = await db.collection("team");
  let team = new Set();
  let results = await collection.find({}).project({_id: 0, photos: 1}).toArray();
  results.forEach(teamPic => {
    if(teamPic?.photos) {
      team.add(teamPic?.photos);
    }
  });
  results = [...team]
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

export default router;
