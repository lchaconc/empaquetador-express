/*
const utils = require ("./js/utils.js");
const eventHandlers = require ("./js/handlers.js");
const json = require("./data.json");
*/
import json from "./data.json";



onload =()=> setup();

async function setup() {
    const data = json[0];      
    console.log("setup", data);
  
  /*
  const textos = data.textos; 
  const areas = data.areas;
  const cajas = data.cajas;
  
  utils.eliminarElemento("divCargandoDatos");
  utils.renderTexto("divTitulo1", textos.titulo, "h1" );
  utils.renderTexto("divInstrucciones", textos.instrucciones, "p", "alert alert-secondary" );
  utils.renderAreas(areas);
  utils.renderCajas(cajas);
  eventHandlers(cajas, textos );
  */
}
