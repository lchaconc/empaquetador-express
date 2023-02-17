import express from "express";
import dotenv from "dotenv";
import path from "path";
import indexRoutes from "./routes/index.routes";

const app = express();
dotenv.config();
app.set("port", process.env.PORT || 3700);
app.use(express.json());

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(indexRoutes);

export default app;
