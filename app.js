var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");


var app =express();
    



// App Config
mongoose.connect("mongodb://localhost/blogApp",
 {
    useNewUrlParser: true,
    useUnifiedTopology : true
},(err)=>{
    if(!err){
        console.log('database connected');
    }
})
app.set("view engine", "ejs")
app.use('/public',express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended:true}))

//creating schema and Model

var blogSchema = mongoose.Schema({
    title : String,
    image : String,
    body  : String,
    created : 
        {
            type : Date, 
            default : Date.now
        }
})


var Blog = mongoose.model("Blog", blogSchema)

//Routes

app.get("/", function(req, res){
    res.redirect("/blogs")
})

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err)
        }else {
            res.render("index", {blogs : blogs})
        }
    }) 
})

  






app.listen(5000, function(){
    console.log("Blog App is Running")
})


