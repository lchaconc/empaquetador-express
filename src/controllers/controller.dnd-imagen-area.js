//import path from "path";
//import * as sd from "../utils/staticdata.js";
//import build from "../../plantillas/builder.js";
const DndImagenArea = require ("../models/model.dnd-imagen-area");
const { build } = require("../../plantillas/builder.js");
const { writeJson } = require("../utils/staticdata.js");
const path = require("path");

async function generarBuild(req, res) {
  const dndImagenArea = await DndImagenArea.find({});
  //console.log("dndImagenArea", dndImagenArea);


  // Inicio de escritura en JSON
  // En terminal: npx webpack --config ./plantillas/webpack.config.js 

  //const jsonDirectory = path.join(process.cwd(), "plantillas");
  //const file = "builder.js";

  const resEscritura = await writeJson(dndImagenArea, "dnd-imagen-area", "data");
  console.log("resEscritura", resEscritura);

  
  try {
    //obtiene los datos del build y los almacena en "stats" 
    //para luego parsearlo y obtener el nombre del zip que comprimió en el build
    const stats = await build();
    const info = stats.toJson();
    console.log("name", info.assets[1] );

    return res.json({
      IsOk: true,
      msj: "Paquete generado",      
      path: "/descargas/" + info.assets[1].name.split("\\")[2]
    });
  } catch (err) {
    console.error("********Error al construir la aplicación: >>>>", err);
    return res.json({ IsOk: false, msj: err });
  }

}


module.exports = {
  generarBuild,
};
