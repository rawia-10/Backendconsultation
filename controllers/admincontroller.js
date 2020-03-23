const adminmodel=require("../models/adminmodel")



module.exports={

addadmin:function(req,res){
      const admin=new adminmodel(
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
            role:req.body.role
            
            });
            admin.save(function(err)
            {

                
       if(err){
    Console.log(err)
      }
    //on utilise API REST res.json
      else
      {
      res.json({state:'ok',msg:'admin est  ajouter'}) }
      })
    },

getall:function(req,res){
   
  adminmodel.find({},function(err,admin){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(admin)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // adminmodel.find({recherche par seul attribue kifma nom wila prenom})
    adminmodel.findOne({_id:req.params.id},function(err,admin){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(admin)
    }
  })
  },


deleteadmin: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // adminmodel.find({recherche par seul attribue kifma nom wila prenom})
    adminmodel.remove({_id:req.params.id},function(err,admin){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"admin supprime"})
    }
  })
  },
  
updateadmin: function(req, res){

    adminmodel.update({_id:req.params.id},{$set:req.body},
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
      res.json({state:"yes",msg:"admin a modifier"})
    }
  })
  },
  

/*   pushrendezvousinadmint:function(req,res){
    adminmodel.updateOne({_id:req.params.id},{$push:{rendezvous:req.body.rendezvous}},
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
    