  const fs=require('fs');
  const Movie=require('./../Models/movieModel')



exports.getAllMovies= async(req,res)=>{
try {
  const movies= await Movie.find();
  res.status(200).json({
    status:"success",
   
    data :{
      movies
    }
  })
} catch (error) {
  res.status(404).json({
    status:"failed",
    message:error.message
  })
}

 }
 exports.SingleMovie=async (req,res)=>{
         try {
         // const movie= await Movie.find({_id:req.params.id});
         const movie=await Movie.findById(req.params.id);
            res.status(200).json({
    status:"success",
    data :{
      movie
    }
  })
         } catch (error) {
res.status(404).json({
  status: "failed",
message: error.message
})
  }
}
 
 exports.CreateMovie= async  (req,res)=>{
try {
   
  const movie= await  Movie.create(req.body)  
  res.status(201).json({status:"success",
    data:{
      movie
    }
  }) 
} catch (error) {
    res.status(404).json({
      status:"failed",
      message:error.message
    })
}
 }
 exports.UpdateMovie= async (req,res)=>{
  try {
    const updatedMovie=await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.status(202).json({
      status:"success",
      data:{
        updatedMovie
      }
    })
  } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message
    })
  }
  }



 
 exports.DeleteMovie= async (req,res)=>{
try {
  await Movie.findByIdAndDelete(req.params.id);
res.status(204).json({
  status:'success',
  data:null
});
}catch (error) {
  res.status(404).json({
    status:"fail",
message:error.message
  })
}

 }