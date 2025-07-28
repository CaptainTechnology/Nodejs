
const { error } = require("console");
const fs=require("fs");

fs.writeFile("test.txt","This is first file created by captain",(error)=>{
  if(error){
    console.log("Some error occured");
  }
  console.log("Everything is fine");
})