  const fs=require('fs');

let movies=JSON.parse(fs.readFileSync('./data/movies.json'))

exports.getAllMovies=(req,res)=>{
res.status(200).json({status:"succes",
  data:{
    movies:movies
  }
});
 }
 exports.SingleMovie=(req,res)=>{
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
 }
 exports.CreateMovie=(req,res)=>{
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
   
 }
 exports.UpdateMovie=(req,res)=>{
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


 }
 exports.DeleteMovie=(req,res)=>{
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
 }