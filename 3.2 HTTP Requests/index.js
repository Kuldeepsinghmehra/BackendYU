import  Express  from "express";
const app=Express();
const port=3000;
app.get("/", (req, res)=> {
    res.send("hello from nodemon this is refreshing")
});
app.get("/about",(req,res)=>{
    res.send("<h1>this is about section</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h2>this is from contact</h2>")
})
app.listen(port,()=>{
    console.log("server running")
});