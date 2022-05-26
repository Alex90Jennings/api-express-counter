//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");
//require the routes
const counter = require("./routes/counter");

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
app.use(express.json());

//Start up our server
const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  console.log("got request!");
  res.send("Hello!");
});

app.get("/counter/:counterNumber", (req, res) => {
  const { counterNumber } = req.params;

  if (!counter[counterNumber]) counter[counterNumber] = 0;

  res.json({ counter: counter[counterNumber] });
});

app.post("/counter/:counterNumber/increment", (req, res) => {
  const { counterNumber } = req.params;

  if (!counter[counterNumber]) counter[counterNumber] = 0;

  counter[counterNumber]++;

  res.json({ counter: counter[counterNumber] });
});

app.post("/counter/:counterNumber/decrement", (req, res) => {
  const { counterNumber } = req.params;

  if (!counter[counterNumber]) counter[counterNumber] = 0;

  counter[counterNumber]--;

  res.json({ counter: counter[counterNumber] });
});

app.post("/counter/:counterNumber/double", (req, res) => {
  const { counterNumber } = req.params;

  if (!counter[counterNumber]) counter[counterNumber] = 0;

  counter[counterNumber] = counter[counterNumber] * 2;

  res.json({ counter: counter[counterNumber] });
});

app.delete("/counter/:counterNumber/delete", (req, res) => {
  const { counterNumber } = req.params;

  if (!counter[counterNumber]) counter[counterNumber] = 0;

  counter[counterNumber] = 0;

  res.json({ counter: counter[counterNumber] });
});
