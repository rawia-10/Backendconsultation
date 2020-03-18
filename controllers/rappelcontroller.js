const rappelmodel=require("../models/rappelmodel")



module.exports={

addrappel:function(req,res){
      const rappel=new rappelmodel(
        {
          
         date:req.body.date,
         heure:req.body.heure,
         type:req.body.type,
         contenu:req.body.contenu
            
            });
            rappel.save(function(err)
            {

                
       if(err){
    Console.log(err)
      }
    //on utilise API REST res.json
      else
      {
      res.json({state:'ok',msg:'rappel est  ajouter'}) }
      })
    },

/* getall:function(req,res){
   
        rappelmodel.find({},function(err,rappel){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(rappel)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // rappelmodel.find({recherche par seul attribue kifma nom wila prenom})
    rappelmodel.findOne({_id:req.params.id},function(err,rappel){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(rappel)
    }
  })
  },


deleterappel: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // rappelmodel.find({recherche par seul attribue kifma nom wila prenom})
    rappelmodel.remove({_id:req.params.id},function(err,rappel){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"rappel supprime"})
    }
  })
  },
  
updaterappel: function(req, res){

    rappelmodel.update({_id:req.params.id},{$set:req.body},
      { 
        date:req.body.date,
         heure:req.body.heure,
         type:req.body.type,
         contenu:req.body.contenu,
            
         
      },function(err)
      {  
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"rappel a modifier"})
    }
  })
  },
   */




}
     