const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");

InitiateMongoServer();
// PORT




const PORT =process.env.PORT || 4000;
app.use(bodyParser.json());
app.use("/user", user);

app.get("/", (req, res) =>{
    res.json({message: "API Working"});
});

app.listen(PORT, (req, res)=>{
    console.log(`Server Started at  PORT ${PORT}`)
})
                                                                                                                                               