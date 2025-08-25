const express=require('express')
const moviesController=require('./controller/moviesController.js')
 
const router=express.Router();
//  router.param('id',(req,res,next,value)=>{
//     console.log('movie id is : '+value);
    
// })

//express.Router return a middleware so moviesrouter is middleware

// using mounting technique
router.route('/movie-stats').get(moviesController.getMovieStats)
router.route('/')
 .get(moviesController.getAllMovies)
 .post(moviesController.CreateMovie)
  
 router.route('/:id')
 .get(moviesController.SingleMovie)
 .patch(moviesController.UpdateMovie)
 .delete(moviesController.DeleteMovie)

 module.exports=router;