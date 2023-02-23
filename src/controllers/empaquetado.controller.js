//import path from "path";
//import Textos from "../modelos/textos.model";
//import * as sd from "../utils/staticdata.js";
//import { exec } from "child_process";
//import build from "../../plantillas/builder.js";
//const path = require("path");
const build = require ("../../plantillas/builder.js");



async function obtenerTextos  (req, res) {
  //const textos = await Textos.find({});

  const textos = [
    {
      _id: "63f38b866489bd78d2bb02af",
      instrucciones: "Instrucciones de prueba...",
      retroCorrecta: "Muy bien! Lo lograste",
      retroIncorrecta: "Inténtalo de nuevo",
      idActividad: 123,
    },
  ];

  //console.log("textos", textos);
  /*
  const tmp = await sd.writeJson(textos, "dnd-imagen-area", "textos");
  console.log("tmp", tmp);
  const jsonDirectory = path.join(process.cwd(), "plantillas");
  const file = "builder.js";
*/
  // En terminal: npx webpack --config ./plantillas/webpack.config.js

  /*
  exec('npx webpack --config ./plantillas/webpack.config.js', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error al ejecutar el comando: ${err}`);
      return;
    }
    
    console.log(`Salida del comando: ${stdout}`);
  })
  */
  
  
  build()
    .then((stats) => {
      console.log(
        stats.toString({
          colors: true,
        })
      );
      res.json({ IsOk: true });
    })
    .catch((err) => {
      console.error("********Error al construir la aplicación: >>>>", err);
      res.json({ IsOk: false });
    });

    

}

module.exports = {
  obtenerTextos
}
