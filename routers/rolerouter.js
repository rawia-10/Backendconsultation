const rolecontroller=require("../controllers/rolecontroller")


const router=require('express').Router();

router.post("/addrole",rolecontroller.addrole);



module.exports=router;






