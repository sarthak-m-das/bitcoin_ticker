const express = require("express");
const app = express();
const request = require("request");
var port =4000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,function(){
    console.log("Server is running on port "+port);
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    var b1=req.body.crypto;
    var b2=req.body.currency;

    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/"+b1+b2,function(error, response,body){
        //var d=json.parse(body);
        //json.parse
        //res.write(body+"<br>");
        console.log(body);
        var d = JSON.parse(body);
        var price = d.high;

        res.send("The price of "+b1+" in "+b2+" is: "+price);

    })

})

