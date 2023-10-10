import { Router } from 'express';
import {getAgenda,getAgendaById,createAgenda,updateAgenda,deleteAgenda} from '../controllers/agenda.controller.js';
const router = Router();


router.get('/agenda',getAgenda)
router.get('/agenda/:id',getAgendaById)
router.post('/agenda',createAgenda)
/* To update partially: patch, and fully: put */
//router.put('/admin/:id',updateAdmin)
router.patch('/agenda/:id',updateAgenda)
router.delete('/agenda/:id',deleteAgenda)

export default router;

