mongoose.connect(process.env.CONNECT_str,{
   useNewUrlParser:true
  }).then((conn)=>{

console.log("db connection success")
  }).catch((error)=>{
   console.log("error ocur")
  })