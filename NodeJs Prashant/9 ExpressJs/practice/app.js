const express=require("express")
const app=express();
const PORT=3000;

app.use((req,res,next)=>{
  console.log("this is first middleware");
  next();
})
app.use((req,res,next)=>{
  console.log("this is second middleware");
  next();
})
// app.use((req,res,next)=>{
//   res.send("<h1>Welcome to captain coding..</h1>")
// })

app.get("/",(req,res,next)=>{
  console.log("<h1>handling GET for / </h1>");
  res.send(`<h1>welcome to get route handling for /</h1>`)
})

app.get("/contact-us",(req,res)=>{
    console.log("<h1>handling GET for /contact-us </h1>");
    res.send(`<h1>Please enter your detail..</h1>
       <form action="/contact-us" method="POST">
    <input type="text" placeholder="Enter your name" name="name"/>
    <input type="text" placeholder="Enter Email" name="email"/>
    <button type="submit">Submit</button>
    `)
})

app.use(express.urlencoded({ extended: true }));

app.post("/contact-us",(req,res)=>{
  res.send(`<h1>This is user detail page</h1>
    <h1> name is : ${req.body.name}</h1>
    <h1> name is : ${req.body.email}</h1>`)
})



app.listen(PORT,()=>{
  console.log("Server is running...");
})