  const { log } = require('console');
const express=require('express');
 const fs=require('fs');

 //it return a function that store in variable
 let app=express();
 
 app.use(express.json())
 //routehandler function
 

 let movies=JSON.parse(fs.readFileSync('./data/movies.json'))
 //route= http method+ url;
 app.get('/api/movies',(req,res)=>{
res.status(200).json({status:"succes",
  data:{
    movies:movies
  }
});
 });
 //get -api/movies/id
 app.get('/api/movies/:id',(req,res)=>{
          //console.log(req.params)
          //convert to number
let id=+req.params.id;
let movie=movies.find(el=>
  el.id===id)
 if(!movie){
   return res.status(404).json({
    status:"fail",
    msg:"data not find"
  })
 }
res.status(200).json({
  status:"succes",
  data:{
    movie:movie
  }
})

          // res.send('test movie');
 })
 //post request
 app.post('/api/movies',(req,res)=>{
   const newId=movies[movies.length-1].id+1;
    // console.log(req.body);
    const newMovie=Object.assign({id:newId},req.body)
    movies.push(newMovie)
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(200).json({
            status:"success",
            data:{
                movie:newMovie
            }
        })
    })
   
 })
 //request for update
 app.patch('/api/movies/:id',(req,res)=>{
  let id=+req.params.id;
  let movieToUpdate=movies.find(el=>el.id===id);
  if(!movieToUpdate){
    return res.status(404).json({
      status:'fail',
      message:'no movie match the id'
    })
  }
  let movieindex=movies.indexOf(movieToUpdate);
 Object.assign(movieToUpdate,req.body);
 movies[movieindex]=movieToUpdate;
 fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
  res.status(200).json({
    status:"success",
            data:{
                movie:movieToUpdate
            }
  })
 })


 })
 //delete data
 app.delete('/api/movies/:id',(req,res)=>{
  const id=+req.params.id;
  const movieToDelete=movies.find(el=>el.id===id);
  const index=movies.indexOf(movieToDelete);
  movies.splice(index,1);
  fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
    res.status(204).json({
      status:"sucess",
      data:{
        movie:null
      }
    })
  })
 })
    
 ///create server
 const port=8000;
 app.listen(port,()=>{
    console.log("server started")
 })