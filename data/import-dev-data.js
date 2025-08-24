 const mongoose=require('mongoose');
 const dotenv=require('dotenv');
 const fs=require('fs')
 const Movie=require('./../Models/movieModel');
   dotenv.config({path:'./config.env'});
   mongoose.connect(process.env.CONNECT_str,{
      useNewUrlParser:true
     }).then((conn)=>{
   
   console.log("db connection success")
     }).catch((error)=>{
      console.log("error ocur")
     })
const movie=JSON.parse(fs.readFileSync('./data/movies.json'))

 const deleteMovies= async ()=>{
    try{
        await Movie.deleteMany();
        console.log('data succesfuly deleted')
    }catch(error){
console.log(error.message)
    }
    process.exit();
 }
  const importMovies= async ()=>{
    try{
        await Movie.create(movie);
        console.log('data succesfuly import')
    }catch(error){
console.log(error.message)
    }
    process.exit();
 }
if(process.argv[2]==='--import'){
    importMovies();
}
if(process.argv[2]==='--delete'){
    deleteMovies();
}
// deleteMovies();
// importMovies();

