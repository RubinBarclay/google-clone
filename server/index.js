require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

// const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve static folder when in deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));

  // Handle React routing, return all requests to index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
}

// Reverse proxy call for Google Search API
app.get("/api/search/:query", async (req, res) => {
  try {
    const searchQuery = req.params.query;
    const apiKey = process.env.API_KEY;
    const searchEngineId = process.env.SEARCH_ENGINE_ID;

    const googleSearchUrl = `https://customsearch.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${searchQuery}`;

    // Fetch search request
    const apiResponse = await axios(googleSearchUrl);

    // Send data to frontend
    res.status(200).send(apiResponse.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
