  const dotenv=require('dotenv')
  dotenv.config({path:'./config.env'});
  const app=require('./app')
  console.log(process.env)
  const port=8000;
 app.listen(port,()=>{
    console.log("server started")
 })