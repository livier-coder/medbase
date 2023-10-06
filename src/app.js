//Archivo para la configuración de la app
//CREATE SERVER
import express from 'express';
import morgan from 'morgan';
import patientRouter from './routes/patient.router.js'
import indexRouter from './routes/index.router.js'
import adminRouter from './routes/admin.router.js'
import doctorRouter from './routes/doctor.router.js'

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
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'ENDPOINT NOT FOUND'
    })
})

export default app;