//Archivo para la configuración de la app
//CREATE SERVER
import express from 'express';
import morgan from 'morgan';
import patientRouter from './routes/patient.router.js'
import indexRouter from './routes/index.router.js'
import adminRouter from './routes/admin.router.js'
import doctorRouter from './routes/doctor.router.js'
import assistantRouter from './routes/assistant.router.js'
import profileRouter from './routes/profile.router.js'
import agendaRouter from './routes/agenda.router.js'
import checkupRouter from './routes/checkup.router.js'
import supplierRouter from './routes/supplier.router.js'
import newsRouter from './routes/news.router.js'

const app = express();


//Settings
app.set('json spaces', 2);

//Middlewares: Get what in going on in the IU, server answers
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use(indexRouter);
app.use(patientRouter);
app.use(adminRouter); 
app.use(doctorRouter);
app.use(assistantRouter);
app.use(profileRouter);
app.use(agendaRouter);
app.use(checkupRouter);
app.use(supplierRouter);
app.use(newsRouter);
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'ENDPOINT NOT FOUND'
    })
})

export default app;