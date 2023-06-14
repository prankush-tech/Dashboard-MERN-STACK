import express, { urlencoded } from 'express';
import cors from 'cors';
import dashboardRoute from './routes/dashboard.js';
import dotenv from 'dotenv';

dotenv.config({
	path: './config/config.env'
});


const app = express();
export default app;



app.enable('trust proxy');
app.use(express.json());
app.use(
	urlencoded({
		extended: true
	})
);


app.use(
	cors({
		credentials: true,
		origin: process.env.FRONTEND_URL,
		methods: [ 'GET', 'POST', 'PUT', 'DELETE' ]
	})
);

app.use('/', dashboardRoute);



