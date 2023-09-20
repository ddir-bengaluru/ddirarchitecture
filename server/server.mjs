import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./router/record.mjs";
import getAllImages, { addAll } from "./db/listAllImages.mjs";


const PORT = 9200;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);
// getAllImages();
// addAll();

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});