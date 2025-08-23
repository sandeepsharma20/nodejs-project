    const mongoose=require('mongoose')
    //defining a schema
  const moviesSchema=mongoose.Schema({
   name:{
      type:String,
      required:[true,'name is required'],
      unique:true
   },
   description:String,
   duration:{
      type:Number,
      required:[true,'duration is required']
   },
   rating:{
      type:Number,
      default:1
   },
  });
  // create a model
  const Movie=mongoose.model('Movie',moviesSchema);
  module.exports=Movie;