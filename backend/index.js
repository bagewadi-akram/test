const express = require("express");

const app = express();

app.use(express.json());

const port = 8081;

app.listen(port, () => console.log(`Server Is Running on ${port}`));

app.get("/get", (req, res) => {
  const json = require("./json");
  res.json(json);
});
app.post("/post", (req, res) => {
  const { email, pass } = req.body;

  if (!email) return res.json({ message: "Please Enter Email" });
  if (!pass) return res.json({ message: "Please Enter Pass" });

  res.json({ message: "Email Password Entered" });
});
