import { Router } from 'express';
import {getAdmin,createAdmin,updateAdmin,deleteAdmin,getAdminById} from '../controllers/admin.controller.js';
const router = Router();


router.get('/admin',getAdmin)
router.get('/admin/:id',getAdminById)
router.post('/admin',createAdmin)
/* To update partially: patch, and fully: put */
//router.put('/admin/:id',updateAdmin)
router.patch('/admin/:id',updateAdmin)
router.delete('/admin/:id',deleteAdmin)

export default router;

