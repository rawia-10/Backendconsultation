const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const rappelschema=mongoose.model('rappel',new mongoose.Schema({   //tjiblna collection min base  de donne
date:{
    type:String,
},
heure:{
    type:String,
},
contenu:{
    type:String,
},
type:{
    type:String,
}


})

);


module.exports=rappelschema; 