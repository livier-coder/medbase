import { Router } from 'express';
import {getPatient,createPatient,updatePatient,deletePatient,getPatientById} from '../controllers/patient.controller.js';
const router = Router();


router.get('/patient',getPatient)
router.get('/patient/:id',getPatientById)
router.post('/patient',createPatient)
//router.put('/patient',updatePatient)
router.patch('/patient/:id',updatePatient)
router.delete('/patient/:id',deletePatient)
export default router;

