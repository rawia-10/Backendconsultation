const rappelcontroller=require("../controllers/rappelcontroller")


const router=require('express').Router();

router.post("/addrappel",rappelcontroller.addrappel);
/* router.get("/getall",rappelcontroller.getall);
router.get("/getbyid/:id",rappelcontroller.getbyid);
router.delete("/delete/:id",rappelcontroller.deleterappel);
router.put("/update/:id",rappelcontroller.updaterappel);  */


module.exports=router;






