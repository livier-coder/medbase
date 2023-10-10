import { Router } from 'express';
import {getProfile,getProfileById,createProfile,updateProfile,deleteProfile} from '../controllers/profile.controller.js';
const router = Router();


router.get('/profile',getProfile)
router.get('/profile/:id',getProfileById)
router.post('/profile',createProfile)
/* To update partially: patch, and fully: put */
//router.put('/admin/:id',updateAdmin)
router.patch('/profile/:id',updateProfile)
router.delete('/profile/:id',deleteProfile)

export default router;

