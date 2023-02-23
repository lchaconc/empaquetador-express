//import app from "./src/app.js";
const app = require("./src/app.js");



app.listen(app.get("port"), () => {
  console.log(`API Server en puerto ${app.get("port")}`)
})
