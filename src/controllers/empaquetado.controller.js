import path from 'path';
import Textos from "../modelos/textos.model";
import * as sd from "../utils/staticdata";
import {exec} from "child_process";


export async function obtenerTextos (req, res) {
    const textos = await Textos.find({});
    console.log("textos", textos); 
    const tmp = await sd.writeJson (textos, "dnd-imagen-area", "textos" );
    console.log("tmp",tmp);
    const jsonDirectory = path.join(process.cwd(), 'plantillas');    
    const file = "builder.js";

    exec( "node " + jsonDirectory + '/'  + file, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error al ejecutar el script: ${error}`);
          return;
        }
        console.log(`Resultado: ${stdout}`);
      });
    
    res.json( {isOk:true} ); 
    
}