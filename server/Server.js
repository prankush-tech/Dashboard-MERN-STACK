import {connectDB} from './config/database.js';
import app from './App.js';



connectDB()


app.get('/',(req,res)=>{
    res.send("<h1>working</h1>");
})

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})