import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello" });
});
app.listen(4000, () => console.log("Hello World"));
