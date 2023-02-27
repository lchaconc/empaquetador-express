//import {Router} from "express"
//import * as CtrEmpaquetador from "../controllers/empaquetado.controller.js"
const {Router} = require("express");
const CtrEmpaquetador = require("../controllers/controller.dnd-imagen-area.js");

const router = Router()

router.get('/build', CtrEmpaquetador.generarBuild );

module.exports = router;