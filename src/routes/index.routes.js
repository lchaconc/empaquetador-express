//import {Router} from "express"
//import * as CtrEmpaquetador from "../controllers/empaquetado.controller.js"
const {Router} = require("express");
const CtrEmpaquetador = require("../controllers/empaquetado.controller.js");

const router = Router()

router.get('/api', CtrEmpaquetador.obtenerTextos );

module.exports = router;