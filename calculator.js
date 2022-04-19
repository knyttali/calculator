const express = require("express");
const { send } = require("express/lib/response");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){ 

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    
    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.listen(3000, () => {
  console.log("Server is listening to localhost:3000");
});
