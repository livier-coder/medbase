import { Router } from 'express';
import {getCheckup,getCheckupById,createCheckup,updateCheckup,deleteCheckup} from '../controllers/checkup.controller.js';
const router = Router();


router.get('/checkup',getCheckup)
router.get('/checkup/:id',getCheckupById)
router.post('/checkup',createCheckup)
/* To update partially: patch, and fully: put */
//router.put('/checkup/:id',updateCheckup)
router.patch('/checkup/:id',updateCheckup)
router.delete('/checkup/:id',deleteCheckup)

export default router;

