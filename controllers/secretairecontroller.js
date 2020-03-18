const secretairemodel=require("../models/secretairemodel")



module.exports={

addsecretaire:function(req,res){
      const secretaire=new secretairemodel(
        {
            nom:req.body.nom,
            prenom:req.body.prenom,
            email:req.body.email,
            password:req.body.password,
            adresse:req.body.adresse,
            tel:req.body.tel,
            genre:req.body.genre,
            date_naissance:req.body.date_naissance,
            rendezvous:req.body.rendezvous,
            
            });
            secretaire.save(function(err)
            {

                
       if(err){
    Console.log(err)
      }
    //on utilise API REST res.json
      else
      {
      res.json({state:'ok',msg:'secretaire est  ajouter'}) }
      })
    },

getall:function(req,res){
   
  secretairemodel.find({},function(err,secretaire){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(secretaire)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // secretairemodel.find({recherche par seul attribue kifma nom wila prenom})
    secretairemodel.findOne({_id:req.params.id},function(err,secretaire){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(secretaire)
    }
  })
  },


deletesecretaire: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // secretairemodel.find({recherche par seul attribue kifma nom wila prenom})
    secretairemodel.remove({_id:req.params.id},function(err,secretaire){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"secretaire supprime"})
    }
  })
  },
  
updatesecretaire: function(req, res){

    secretairemodel.update({_id:req.params.id},{$set:req.body},
      {  nom:req.body.nom,
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
      res.json({state:"yes",msg:"secretaire a modifier"})
    }
  })
  },
  

/*   pushrendezvousinsecretairet:function(req,res){
    secretairemodel.updateOne({_id:req.params.id},{$push:{rendezvous:req.body.rendezvous}},
      function(err,data)
      {
        if(err)
        {
        res.json({state:"no",msg:"erreur"})
        }
      
      else
      {
       res.json(data)
      }
})} */





}
    