    const mongoose=require('mongoose')
    //defining a schema
  const moviesSchema=mongoose.Schema({
   name:{
      type:String,
      required:[true,'name is required'],
      unique:true,
      trim:true
   },
   description:{
      type:String,
      required:[true,'description is required'],
      unique:true
   },
   duration:{
      type:Number,
      required:[true,'duration is required'],

   },
   rating:{
      type:Number,
      default:1
   },
   totalRating:{
      type:Number
   },
   releaseYear:{
      type:Number,
      required:[true,'Releaseyear is required']
   },
   releaseDate:{
      type:Date
   },
   createdAt:{
      type:Date,
      default:Date.now()
   },
   genres:{
      type:[String],
      required:[true,"genres is required"]
   },
   directors:{
      type:[String],
      required:[true,'Directors is required field']
   },
   coverImage:{
      type:String,
      require:[true,'cover image is required field']
   },
   actors:{
      type:[String],

      require:[true,"ators is reuired field"]
   },
   price:{
      type:Number,
      require:[true,'price is required']
   }
  },{
   toJSON:{virtuals:true},
   toObject:{virtuals:true}
  });
  moviesSchema.virtual('durationInHours').get(function(){
   return this.duration/60;
  })
  // create a model
  const Movie=mongoose.model('Movie',moviesSchema);
  module.exports=Movie;