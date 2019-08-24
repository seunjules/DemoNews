const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");


app.use(cors());
app.use(bodyParser.json());

app.post("/newsCategory", async (req, res) => {
  let url = req.body.url;
  let data = await getData(url);
  res.send({data
  });
});

app.post("/search", async (req, res) => {
  let arg = req.body.arg;
  let data = await getData(
    `https://newsapi.org/v2/everything?q=${arg}&sortBy=publishedAt&language=en&apiKey=fe70ebfecd2948d797f65db1b7d70bf3`
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

app.listen(process.env.PORT || 5000);
