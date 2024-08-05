import express from "express"
const app=express();
const port=3000
function isWeekend()
{
    var currentday=new Date().getDay();
    return (currentday===0||currentday===6);
}
app.get("/",(req,res)=>{
    const message=isWeekend()
    ? "Hey! It's the weekend, it's time to have fun"
    : "Hey! It's a weekday, time to put in work";

   
    res.render("index.ejs",{message});

});

app.listen(port,()=>{
    console.log("running");
})
