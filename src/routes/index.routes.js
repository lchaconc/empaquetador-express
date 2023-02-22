import {Router} from "express"
import * as CtrEmpaquetador from "../controllers/empaquetado.controller"

const router = Router()

router.get('/api', CtrEmpaquetador.obtenerTextos );

export default router;