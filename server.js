const { response } = require("express");
const express = require("express");
const { request } = require("http");
const { dirname } = require("path");

const app = express();
const PORT = 8000;
const cors = require("cors");
app.use(cors());

let families = {
  poul: {
    age: 68,
    birthName: "poul kagaju",
    lacation: "logos",
    sunRise: 1978,
  },
  ghandi: {
    age: 8,
    birthName: "joseph iradukunda",
    lacation: "Kigali",
    sunRise: 1700,
  },
  peter: {
    age: 80,
    birthName: "luka linda",
    lacation: "tokio",
    sunRise: 1800,
  },
  jane: {
    age: 20,
    birthName: "zena mirembe",
    lacation: "kampala",
    sunRise: 1900,
  },
};
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/families", (request, response) => {
  response.send(families);
});
app.get("/api/families/:familyName", (request, response) => {
  const family = request.params.familyName.toLowerCase();
  console.log(family);
  if (families[family]) {
    response.json(families[family]);
  } else {
    response.json(families[families]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
