import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Reverse proxy call for Google Search API
app.get("/api/search/:query", async (req, res) => {
  try {
    const searchQuery = req.params.query;
    const apiKey = process.env.API_KEY;
    const searchEngineId = process.env.SEARCH_ENGINE_ID;

    const googleSearchUrl = `https://customsearch.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${searchQuery}`;

    // Fetch search request
    const apiRespone = await fetch(googleSearchUrl);
    const data = await apiRespone.json();

    // Send data to frontend
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
