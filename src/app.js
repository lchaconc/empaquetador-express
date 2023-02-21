import express from "express";
import dotenv from "dotenv";
import indexRoutes from "./routes/index.routes";
import conectDB from "./db.conexion" ;

const app = express();
dotenv.config();

conectDB().catch(err => console.log(err));

app.set("port", process.env.PORT || 3700);
app.use(express.json());
app.use(express.static("./public"));



app.use(indexRoutes);

export default app;
