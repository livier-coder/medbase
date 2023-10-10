import { Router } from 'express';
import {getAssistant,createAssistant,updateAssistant,deleteAssistant,getAssistantById} from '../controllers/assistant.controller.js';
const router = Router();


router.get('/assistant',getAssistant)
router.get('/assistant/:id',getAssistantById)
router.post('/assistant',createAssistant)
//router.put('/assistant',updateAssistant)
router.patch('/assistant/:id',updateAssistant)
router.delete('/assistant/:id',deleteAssistant)
export default router;

