//import path from "path";
//import Textos from "../modelos/textos.model";
//import * as sd from "../utils/staticdata.js";
//import build from "../../plantillas/builder.js";
//const path = require("path");
const { build } = require("../../plantillas/builder.js");
const { writeJson } = require("../utils/staticdata.js");
const path = require("path");

async function obtenerTextos(req, res) {
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

  console.log("Inicio de escritura en json");
  const resultado = await writeJson(textos, "dnd-imagen-area", "textos");
  //console.log("resultado",resultado);

  try {
    //obtiene los datos del build y los almacena en "stats" 
    //para luego parsearlo y obtener el nombre del zip que comprimió en el build
    const stats = await build();
    const info = stats.toJson();
    console.log(info);

    return res.json({
      IsOk: true,
      msj: "Paquete generado",      
      path: "/descargas/" + info.assets[0].name.split("\\")[3],
    });
  } catch (err) {
    console.error("********Error al construir la aplicación: >>>>", err);
    return res.json({ IsOk: false, msj: err });
  }
}

module.exports = {
  obtenerTextos,
};
