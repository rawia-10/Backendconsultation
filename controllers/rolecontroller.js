const rolemodel=require("../models/rolemodel")



module.exports={

addrole:function(req,res){
      const role=new rolemodel(
        {
          
     nom:req.body.nom
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

  }