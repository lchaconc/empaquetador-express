//import path from 'path';
//import { promises as fs } from 'fs';
const path = require("path");
const {promises} = require("fs");
const fs = promises;



async function readJson( dir,  name) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const data = await fs.readFile(jsonDirectory + '/' +  dir +"/" + name +'.json', 'utf8');
  const parsedData = JSON.parse(data)
  return parsedData;
}


async function writeJson(data, dir, name ) {
  const jsonDirectory = path.join(process.cwd(), 'plantillas');
  await fs.writeFile(jsonDirectory + '/' + dir + "/" + name +'.json', JSON.stringify(data));  
  const res = {isOk: true, msj: "Datos actualizados."};
  return (res);
}

module.exports = {readJson, writeJson }