import { Router } from 'express';
import {getNews,getNewsById,createNews,updateNews,deleteNews} from '../controllers/news.controller.js';
const router = Router();


router.get('/news',getNews)
router.get('/news/:id',getNewsById)
router.post('/news',createNews)
/* To update partially: patch, and fully: put */
//router.put('/news/:id',createNews)
router.patch('/news/:id',updateNews)
router.delete('/news/:id',deleteNews)

export default router;

