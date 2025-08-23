  const mongoose=require('mongoose')
  const dotenv=require('dotenv')
  dotenv.config({path:'./config.env'});
  const app=require('./app')
  console.log(process.env)
  mongoose.connect(process.env.CONNECT_str,{
   useNewUrlParser:true
  }).then((conn)=>{

console.log("db connection success")
  }).catch((error)=>{
   console.log("error ocur")
  })

  // create a document

  // it save all  the data in collection
 
  const port=8000;
 app.listen(port,()=>{
    console.log("server started")
 })