//on fait un appel d ORM
var mongoose =require('mongoose');
var mongoDB='mongodb://127.0.0.1/cabinetmedicale';


mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.Promise=global.Promise;
// ne fonctionne pas avec un seul router : bd global
//node async donc yebloki tt les instructions yexecuti lmongod apres ykamml


var DB=mongoose.connection;
DB.on('error',console.error.bind(console,'MongoDB connectionn error :'))