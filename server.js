const express=require("express")
const bodyParser=require("body-parser")
var cors=require("cors")


const userrouter=require("./routers/userrouter")
const patientrouter=require("./routers/patientrouter")
const medecinrouter=require("./routers/medecinrouter")
const secretairerouter=require("./routers/secretairerouter")
const rendezvousrouter=require("./routers/rendezvousrouter")
const portfoliorouter=require("./routers/portfoliorouter")
const rappelrouter=require("./routers/rappelrouter")
const rolerouter=require("./routers/rolerouter")
const adminrouter=require("./routers/adminrouter")

const db=require("./models/db")
const app=express()


app.set('secretKey','test')//nal9awouha fi authentification



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors())

app.use("/user",userrouter)
app.use("/patient",patientrouter)
app.use("/medecin",medecinrouter)
app.use("/secretaire",secretairerouter)
app.use("/portfolio",portfoliorouter)
app.use("/role",rolerouter)
app.use("/rendezvous",rendezvousrouter)
app.use("/rappel",rappelrouter)
app.use("/admin",adminrouter)

app.listen(3017,(err)=> {  
    //pour la creation d'un server
if(err){
  console.log("erreur")
}else{
  console.log('Hello world')
}})