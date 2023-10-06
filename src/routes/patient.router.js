import { Router } from 'express';
import {getPatient,createPatient,updatePatient,deletePatient} from '../controllers/patient.controller.js';
const router = Router();


router.get('/patient',getPatient)
router.post('/patient',createPatient)
router.put('/patient',updatePatient)
router.delete('/patient',deletePatient)

export default router;

