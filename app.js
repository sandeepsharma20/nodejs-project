 
const express=require('express');
 const morgan=require('morgan');
 const moviesRouter=require('./moviesRoutes')


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
 
module.exports=app;


 ///create server
