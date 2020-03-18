const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const roleschema=mongoose.model('role',new mongoose.Schema({   //tjiblna collection min base  de donne
nom:{
    type:String,
},



})

);


module.exports=roleschema; 