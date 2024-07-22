
const fs= require("fs")
// fs.writeFile("message.txt","hello this is write file",(err)=>{
 
//     if(err) throw err;
//     console.log("your file has been saved")
// });
fs.readFile('./message.txt',"utf8",(err,data)=>{
    if (err) throw err;
    console.log(data);

});