const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");
const constants = require("./constants");

app.use(cors());
app.use(bodyParser.json());

app.post("/newsCategory", async (req, res) => {
  console.log("hit this endpoint", typeof(constants.TOP_NEWS) )
  let url = req.body.url;
  let topNews = await getData(constants.TOP_NEWS);
  let business = await getData(constants.BUSINESS);
  let sports = await getData(constants.SPORTS);
  let health = await getData(constants.HEALTH);
  let entertainment = await getData(constants.ENTERTAINMENT);
  let technology = await getData(constants.TECHNOLOGY);
  res.send({
    topNews: topNews,
    business: business,
    sports: sports,
    health: health,
    entertainment: entertainment,
    technology: technology
  });
});

app.post("/search", async (req, res) => {
  let arg = req.body.arg;
  let data = await getData(
    `https://newsapi.org/v2/everything?q=${arg}&sortBy=publishedAt&language=en&apiKey=482b27cd68214d98923d7f4b13d4db6b`
  );
  res.json({
    data: data,
    success: true
  });
});

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT || 4000);
