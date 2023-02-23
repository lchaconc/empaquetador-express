//const build = require("./builder.js");
import build from "./builder";

build()
  .then(stats => {
    console.log(stats.toString({
      colors: true
    }));
  })
  .catch(err => {
    console.error('********Error al construir la aplicación: >>>>', err);
  });
