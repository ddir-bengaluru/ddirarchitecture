import express from "express";
import db from "../db/connection.mjs";
import { BSON } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send("DDIR BACKEND");
});

router.get("/allProjects", async (req, res) => {
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
  res.status(200).send(results);
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
  res.status(200).send(results);
});

router.get("/carousel", async (req, res) => {
  try {
    const collection = await db.collection("carousel");
    const results = await collection.find({}).project({_id: 0, photos: 1}).toArray();

    // Flatten the arrays of photos into a single array
    const images = results.flatMap(carouselPic => carouselPic?.photos || []);

    res.status(200).send(images);
  } catch (error) {
    console.error("Error fetching carousel photos:", error);
    res.status(500).send("Internal Server Error");
  }
});


router.get('/news', async (req, res) => {
  let collection = await db.collection("news");
  try {
    let result = await collection.find({}).toArray();
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send({error: e});
  }
});

router.get("/:name", async (req, res) => {
  let collection = await db.collection("projects");
  let query = {name: req.params.name};
  let result = await collection.findOne(query);

  if (!result) res.sendStatus(404);
  else res.status(200).send(result);
});

router.get("/category/:name", async (req, res) => {
  let collection = await db.collection("projects");
  let query = {category: req.params.name};
  let results = await collection.find(query).toArray();

  if(!results.length) res.status(404).send([]);
  else res.status(200).send(results);
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
  res.status(200).send(results);
});

router.get('/news/:_id', async (req, res) => {
  let collection = await db.collection("news");
  let newsId = new BSON.ObjectId(req.params._id);
  let query = {_id: newsId};
  let results = await collection.findOne(query);

  if(!results) res.status(404).send([]);
  else res.status(200).send(results);
})

router.get("/search/:name", async (req, res) =>{
  const results = [];
  let searchTerm = req.params.name;
  let projects = await db.collection("projects");
  let art = await db.collection("art");
  let news = await db.collection("news");
  const projectResults = await projects.
  find({
    $or: [
      {name: {$regex: searchTerm, $options: 'i'}},
      {location: {$regex: searchTerm, $options: 'i'}},
      {client_name: {$regex: searchTerm, $options: 'i'}},
    ]
  }).toArray();
  const artResults = await art.find({name: {$regex: searchTerm, $options: 'i'}}).toArray();
  const newsResults = await news.find({
    $or: [
      {title: {$regex: searchTerm, $options: 'i'}},
      {description: {$regex: searchTerm, $options: 'i'}}
    ]
  }).toArray();
  results.push(...projectResults, ...artResults, ...newsResults);

  if (!results.length) res.status(404).send([]);
  else res.status(200).send(results);
});

export default router;
