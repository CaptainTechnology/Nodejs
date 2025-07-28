
const express=require("express")
const hostRoute=express.Router();
const path=require("path")

hostRoute.get("/add-home",(req,res)=>{
  // res.send(`<h1>Register you home</h1>
  //   <form action="/host/add-home" method="POST">
  //   <input type="text" placeholder="Enter Name" name="hoseName"/>
  //   <button type="submit"> Confirm </button>
  //   `)

  res.sendFile(path.join(__dirname,"../","views","addHome.html"))
})

hostRoute.post("/add-home",(req,res)=>{
  // res.send(`<h1>Home Registered successfully.</h1>
  //   <a href="/"> Goto Home</a>`)

  console.log(path.join(__dirname,"../views",'Registered.html'))
  console.log("your house name is :",req.body?.hoseName);
  // console.log("your house name is :",req.body.hoseName);// app will be crashed if body is undefined
  
  res.sendFile(path.join(__dirname,"../views","Registered.html"))
})

module.exports=hostRoute;