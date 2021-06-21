import express from "express";

const app = express();

app.get("/teste", (req, res) => {
  res.json({ message: "Pega nois" });
});

app.listen(3333, () => {
  console.log("Server is running on port 3333👨‍💻");
});
