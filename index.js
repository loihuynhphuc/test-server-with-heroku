const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./routes/index')
const path = require('path');



dotenv.config();



// app.get("/",(req,res,next)=>{
//     res.status(300).end();
//     // res.send("HOME PAGE");
// })

// usage morgan

app.use(morgan("common"));
// usage cors
app.use(cors())
// middle parse json
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.post("/register",(req,res,next)=>{
//         res.status(500);
// })
// connect server -> database
async function connect (){
    try {
     await mongoose.connect(process.env.MONGODB_URL);
          console.log("connect successfully");
    } catch (error) {
        console.log(error.message);
    }
 }
connect ()

app.use('/congkhai',express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {

    var duongDanFile = path.join(__dirname,'home.html');
    res.sendFile(duongDanFile);
  })
//   app.get('/home.css', (req, res) => {

//     var duongDanFilecss = path.join(__dirname,'home.css');
//     res.sendFile(duongDanFilecss);
//   })
router(app);
app.listen(process.env.PORT,()=>{
    console.log("server is running...");
})
