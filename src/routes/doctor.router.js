import { Router } from 'express';
import {getDoctor,createDoctor,updateDoctor,deleteDoctor} from '../controllers/doctor.controller.js';
const router = Router();


router.get('/admin',getDoctor)
router.post('/admin',createDoctor)
router.put('/admin',updateDoctor)
router.delete('/admin',deleteDoctor)

export default router;

