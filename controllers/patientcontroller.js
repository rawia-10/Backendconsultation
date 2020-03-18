const patientmodel=require("../models/patientmodel")



module.exports={

addpatient:function(req,res){
      const patient=new patientmodel(
        {
          nom:req.body.nom,
          prenom:req.body.prenom,
          email:req.body.email,
          adresse:req.body.adresse,
          tel:req.body.tel,
          genre:req.body.genre,
          date_naissance:req.body.date_naissance,
        password:req.body.password,
         // rendezvous:req.body.rendezvous,
            
            });
            patient.save(function(err)
            {

           if(err){
            res.json({state:"no"})
      }
    //on utilise API REST res.json
      else
      {
      res.json({state:'ok',msg:'patient est  ajouter'}) }
      })
    },

getall:function(req,res){
   
  patientmodel.find({}).populate('rendezvous').exec(function(err,patient){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(patient)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // patientmodel.find({recherche par seul attribue kifma nom wila prenom})
    patientmodel.findOne({_id:req.params.id},function(err,patient){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(patient)
    }
  })
  },


deletepatient: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // patientmodel.find({recherche par seul attribue kifma nom wila prenom})
    patientmodel.remove({_id:req.params.id},function(err,patient){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"patient supprime"})
    }
  })
  },
  
updatepatient: function(req, res){

    patientmodel.update({_id:req.params.id},{$set:req.body},
      { 
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
       password:req.body.password,
        adresse:req.body.adresse,
        tel:req.body.tel,
        genre:req.body.genre,
        date_naissance:req.body.date_naissance,
      },function(err)
      {  
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"patient a modifier"})
    }
  })
  },
  




}
    