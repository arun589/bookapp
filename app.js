const path=require('path');
const express=require('express');
const bodyParser = require('body-parser');
const sequelize=require('./util/database');
const user=require("./model/user");
const app=express();
const cors=require('cors');
app.use(cors());
const appcontroller=require('./controller/appcontroller')
app.use(bodyParser.json({extended:false}));
app.post("/user/adduser",appcontroller.postappointment);
app.get("/user/getusers",appcontroller.getalluser);
app.delete("/user/deleteuser/:id",appcontroller.deleteuser)
sequelize.sync()
.then(res=>console.log("done"))
.catch(err=>console.log(err));
app.listen(4000)