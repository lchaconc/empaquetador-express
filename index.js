import app from "./src/app";



app.listen(app.get("port"), () => {
  console.log(`API Server en puerto ${app.get("port")}`)
})
