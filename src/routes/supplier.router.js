import { Router } from 'express';
import {getSupplier,getSupplierById,createSupplier,updateSupplier,deleteSupplier} from '../controllers/supplier.controller.js';
const router = Router();


router.get('/supplier',getSupplier)
router.get('/supplier/:id',getSupplierById)
router.post('/supplier',createSupplier)
/* To update partially: patch, and fully: put */
//router.put('/supplier/:id',updateSupplier)
router.patch('/supplier/:id',updateSupplier)
router.delete('/supplier/:id',deleteSupplier)

export default router;

