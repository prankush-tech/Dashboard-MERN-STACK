import express from 'express';
import getJsonData from '../controller/dashboardJson.js'


const router = express.Router();
router.get('/dashboard',getJsonData );



export default router;
