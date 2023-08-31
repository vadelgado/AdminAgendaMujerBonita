import { Router } from 'express';
import { deleteCita, getCita, getCitas, postCita, putCita } from "../controllers/cita";
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken, getCitas)
router.get("/:id", getCita);
router.delete("/:id", deleteCita);
router.post("/", postCita);
router.put("/:id", putCita);
export default router;