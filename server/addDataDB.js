import {connectDB} from './config/database.js';
import jsonDashboadrSchema from './models/dashboardSchemaModel.js';
import jsonData from './jsondata.js';
import dotenv from 'dotenv';

dotenv.config({
	path: './config/config.env'
});



const addDataDB = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        await jsonDashboadrSchema.deleteMany({});
        await jsonDashboadrSchema.create(jsonData);
        console.log("Data Added to DB");
    }
    catch(error){
        console.log(error);
    }
}


connectDB()
addDataDB()
