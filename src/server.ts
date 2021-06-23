import "reflect-metadata";
import express from "express";
import { handleErrors } from "./middlewares/handleErrors";
import { routes } from "./index.routes";
import "./database";

const app = express();
app.use(express.json());

app.use(routes);
app.use(handleErrors);

app.listen(3333, () => {
  console.log("Server is running on port 3333👨‍💻");
});
