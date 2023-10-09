import { Router } from 'express';
import {getDoctor,createDoctor,updateDoctor,deleteDoctor,getDoctorById} from '../controllers/doctor.controller.js';
const router = Router();


router.get('/doctor',getDoctor)
router.get('/doctor/:id',getDoctorById)
router.post('/doctor',createDoctor)
//router.put('/doctor',updateDoctor)
router.patch('/doctor/:id',updateDoctor)
router.delete('/doctor/:id',deleteDoctor)
export default router;

