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
    familyMembers: 5,
    fatherName: "Poul",
    motherName: "Esther",
    children: "Moses,Ludy and jack",
    country: "Rwanda",
    explanation:
      "These family is a good family full of peace every one wishes to live with it",
    age: 68,
  },
  ghandi: {
    familyMembers: 4,
    fatherName: "Joel",
    motherName: "Nice",
    children: "Abraham and Jacob",
    country: "Burundi",
    explanation: "These family is a richest in the world",
    age: 68,
  },
  peter: {
    familyMembers: 3,
    fatherName: "Joseph",
    motherName: "Rose",
    children: "John",
    country: "Ghana",
    explanation: "These family is a good family likes to praise the Lord",
    age: 68,
  },
  jane: {
    familyMembers: 4,
    fatherName: "David",
    motherName: "joy",
    children: "Ruthand Lucky",
    country: "Uganda",
    explanation:
      "These family is a good family likes to travel all over the world and visiting many parks",
    age: 28,
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
// sever port
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
