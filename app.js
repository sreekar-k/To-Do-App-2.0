const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const date = require(__dirname+"/date.js")
//We request this module , we use __dir as its a local Module

// var item = "";

//We use Const also here

let items = [];
var workItems = [];
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : true}));
//res.send can send ony once ,Server sees as end ,so we use res.write
app.use(express.static("public"));

app.get("/",(req,res)=>{
 

    //We get Date here by exports
    // let day = date.getDay();
    let day = date.getDate();


    // console.log(day);
    //We call function

    res.render("list",{listTitle:day , newListItems:items});
    //we get error as we are rendering here and item is not recognized here as it is written by USER after POST it is called Scope Problem
});


app.post("/",(req,res)=>{

    item = req.body.newItem;
    
    if(req.body.list === "Work") 
         {workItems.push(item);
            res.redirect("/work");
         }//Logic to Check if it come from HOME or Work Route
    else{
        items.push(item);
        res.redirect("/");
    }
    //It stores the item and direct to Home Page
    
    
});

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List",newListItems:workItems})
});
app.get("/about",(req,res)=>{
    res.render("about")
});

app.post("/work",(req,res)=>{

    let item = req.body.newItem;
   
    workItems.push(item);
    res.redirect("/work");
});


app.listen(3000,()=>{
    console.log("server is started port 3000");
})
