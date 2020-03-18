
const admincontroller=require("../controllers/admincontroller")
const multer=require("multer")
const upload=multer({dest:__dirname+"/upload/images"})

const router=require('express').Router();

router.post("/addadmin",upload.single("image"),admincontroller.addadmin);
 router.get("/getall",admincontroller.getall);
router.get("/getbyid/:id",admincontroller.getbyid);
router.delete("/delete/:id",admincontroller.deleteadmin);
router.put("/update/:id",admincontroller.updateadmin); 



module.exports=router;






