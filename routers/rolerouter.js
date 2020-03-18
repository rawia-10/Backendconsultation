const rolecontroller=require("../controllers/rolecontroller")


const router=require('express').Router();

router.post("/addrole",rolecontroller.addrole);
router.get("/getall",rolecontroller.getall)


module.exports=router;






