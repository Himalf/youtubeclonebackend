require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.json());
app.use("/",()=>{
    console.log("listening")
})
app.use("/ypost",require("./route/ypost"));
app.listen(4000,()=>{
    console.log("Server running on 4000 port");
})