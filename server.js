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

app.get("/api/families/:familyName/:year/:age", (request, response) => {
  const family = request.params.familyName.toLowerCase();
  console.log(family);
  const years = request.params.year;
  console.log(years);
  const old = request.params.age;
  console.log(old);
  if (families[family]) {
    response.json(families[family]);
  } else if (families[years]) {
    response.json(families[years]);
  } else if (families[old]) {
    response.json(families[old]);
  } else {
    response.json(families["uknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
