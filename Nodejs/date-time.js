const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 4000;
//API to create file that contain text a brithtime
app.get("/", (req, res) => {
  fs.writeFile("m.txt", createdDate("./m.txt"), (err) => {
    if (err) throw err;
    console.log("write successfully ");
  });
  function createdDate(file) {
    const { birthtime } = fs.statSync(file);
    return birthtime;
  }
  res.send(
    "API is to create a file that contains a text (where the file created)"
  );
});
//API to display all files in the folder
app.get("/list", (req, res) => {
  fs.readdir(path.join(__dirname, "firstask"), (err, files) => {
    if (err) throw err;
    res.send(files);
  });
  console.log(__dirname);
});
app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
