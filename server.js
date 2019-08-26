const express = require("express");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid/v4");
var cors = require("cors");
var fs = require("fs");

const app = express();

app.use(cors());

app.use(bodyParser.json());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/images", (req, res) => {
  console.log(req);
  fs.readFile("./data.json", "utf-8", function(err, data) {
    if (err) throw err;
    var arrayOfObjects = JSON.parse(data);
    res.send(arrayOfObjects);
  });
});

app.post("/api/uploadimage", (req, res) => {
  fs.readFile("./data.json", "utf-8", function(err, data) {
    if (err) throw err;

    var arrayOfObjects = JSON.parse(data);
    arrayOfObjects.push({
      ...req.body,
      id: uuidv4()
    });

    console.log(arrayOfObjects);

    fs.writeFile(
      "./data.json",
      JSON.stringify(arrayOfObjects),
      "utf-8",
      function(err) {
        if (err) throw err;
        console.log("Done!");
      }
    );
  });
});

app.listen(2000, () => console.log("listen.2000"));
