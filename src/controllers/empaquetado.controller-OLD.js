import path from "path";
//import Textos from "../modelos/textos.model";
import * as sd from "../utils/staticdata";
import { exec } from "child_process";
import { build } from "../../plantillas/builder";

export async function obtenerTextos(req, res) {
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
  const tmp = await sd.writeJson(textos, "dnd-imagen-area", "textos");
  console.log("tmp", tmp);
  const jsonDirectory = path.join(process.cwd(), "plantillas");
  const file = "builder.js";

  // En terminal: npx webpack --config ./plantillas/webpack.config.js

 
  exec('npx webpack --config ./plantillas/webpack.config.js', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error al ejecutar el comando: ${err}`);
      return;
    }
    
    console.log(`Salida del comando: ${stdout}`);
  })
  
  res.json({IsOk: true});

}
