import express from "express";
import db from "../db/connection.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("projects");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    location: req.body.location,
  };
  let collection = await db.collection("projects");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

export default router;