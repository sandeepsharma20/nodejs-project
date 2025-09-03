 const mongoose=require('mongoose')
 //name ,email,password,confirmpassword,photo
 const userSchema=new mongoose.Schema({
   name:{
    type:String,
    required:[
        true,'please enter the name'
    ]
   },
   email:{
    type:String,
    required:[true,'please enter a email'],
    unique:true,
    lowercase:true,
    
   },
   photo:{
    type:String
   },
   password:{
    type:String,
    required:[true,'please enter a password'],
    minlength:8
   },
   confirmPassword:{
    type:String,
    required:[true,'please confirm  your password'],
    
   }

 })
 const User=mongoose.model('User',userSchema);
 module.exports=User;