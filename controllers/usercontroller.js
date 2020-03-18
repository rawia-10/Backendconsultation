 const usermodel=require("../models/usermodel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")


module.exports={

adduser:function(req,res){
      const user=new usermodel(
        { nom:req.body.nom,
          prenom:req.body.prenom,
          email:req.body.email,
          password:req.body.password,
          adresse:req.body.adresse,
          tel:req.body.tel,
          genre:req.body.genre,
          date_naissance:req.body.date_naissance,
            
            });
            user.save(function(err)
            {

                
       if(err){
    Console.log(err)
      }
    //on utilise API REST res.json
      else
      {
      res.json({state:'ok',msg:'utilisateur est  ajouter'}) }
      })
    },

getall:function(req,res){
   
        usermodel.find({},function(err,user){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(user)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // usermodel.find({recherche par seul attribue kifma nom wila prenom})
    usermodel.findOne({_id:req.params.id},function(err,user){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(user)
    }
  })
  },


deleteuser: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // usermodel.find({recherche par seul attribue kifma nom wila prenom})
    usermodel.remove({_id:req.params.id},function(err,user){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"user supprime"})
    }
  })
  },
  
updateuser: function(req, res){

    usermodel.update({_id:req.params.id},{$set:req.body},
      {nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        password:req.body.password,
        tel:req.body.tel,
        adresse:req.body.adresse,
        genre:req.body.genre,
        date_naissance:req.body.date_naissance,
          
      },function(err)
      {  
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"user a modifier"})
    }
  })
  },
   


  
  
  Authen:function(req,res){
    usermodel.findOne({email:req.body.email},function(err,userinfo){
      if (err)
      {
        console.log(err)
      }
      else{
        console.log(userinfo)
        if(bcrypt.compare(req.body.password,userinfo.password))
        {
          const token=jwt.sign({id:userinfo._id},req.app.get('secretKey'),{expiresIn:'7h'})
          res.json({state:"success",msg:"user found",data:{user:userinfo,token:token}})
  
        }
        else
        {
          res.json({state:"no",msg:"invalid email or password",data:null})
  
        }
      }
    })
     
         
       
      }

}
     