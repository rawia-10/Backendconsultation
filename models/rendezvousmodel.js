const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const rendezvousschema=mongoose.model('rendezvous',new mongoose.Schema({   //tjiblna collection min base  de donne


date:{
    type:Date,
    required: true, 
    trim: true, 
},

heure:{
    type:String,
    required: true, 
    trim: true, 
},

lieu:{
    type:String,
    required: true, 
    trim: true, 
},

etat:{
    type:String,
    required: true, 
    trim: true, 
},



})

);


module.exports=rendezvousschema;