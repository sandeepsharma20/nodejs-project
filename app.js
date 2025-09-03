 
const express=require('express');
 const morgan=require('morgan');
 const moviesRouter=require('./Routes/moviesRoutes')
 const userRouter=require('./Routes/authRouter')


 //it return a function that store in variable
  let app=express();
 
 app.use(express.json())
 app.use(morgan('dev'))
 //routehandler function


 
 //route= http method+ url;
//  app.get('/api/movies',getAllMovies);
//  //get -api/movies/id
//  app.get('/api/movies/:id',SingleMovie)
//  //post request
//  app.post('/api/movies',CreateMovie)
//  //request for update
 
//  app.patch('/api/movies/:id',UpdateMovie)
//  //delete data
//  app.delete('/api/movies/:id',DeleteMovie)


 //using mounting
app.use('/api/movies', moviesRouter)  
app.use('/api/users', userRouter)
//gobal error handling method
app.use((error,req,res,next)=>{
    error.statusCode=error.statusCode||500;
    res.status(error.statusCode).json({
        status:error.statusCode,
        message:error.message,
    });
})
module.exports=app;


 ///create server
