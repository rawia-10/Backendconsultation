const rolemodel=require("../models/rolemodel")



module.exports={

addrole:function(req,res){
      const role=new rolemodel(
        {
          
     nom:req.body.nom,
     admin:req.body.admin
            });
            role.save(function(err)
            {

                
       if(err){
    Console.log(err)
      }
    //on utilise API REST res.json
      else
      {
      res.json({state:'ok',msg:'role est  ajouter'}) }
      })
    },

getall:function(req,res){
   
      rolemodel.find({}).populate("admin").exec(function(err,rendezvous){ 
      if (err){
        res.json({state:"no",msg:"vous avez un erreur"})
      }
      else{
        res.json(rendezvous)
      }
    })
    
},

  }