{

  // express router
  // Express Router is a feature of the Express.js web framework for Node.js that helps in organizing the routes of a web application. It allows developers to create modular, mountable route handlers and makes the code more maintainable, especially in large-scale applications.
  
  // 🔹 Why Use Express Router?
  // Modular structure: Split route handling into separate files/modules.
  // Maintainability: Easier to manage and scale the application.
  // Clean code: Keeps your main app.js or server.js file clean and readable.
  
}

const express=require("express")
const app=express();
const Router=express.Router();
const PORT=3000;
const userRoute=require("./routes/userRoute");
const hostRoute = require("./routes/hostRoute");
const path=require("path")
const rootPath=require("./utils/pathUtils")

app.use((req,res,next)=>{
  console.log(req.method,req.url);
  // it will log for every request
  next();
})


// app.use(express.urlencoded());// it will parse the body of each request
app.use(userRoute);// it handle user quaries and readble and can manage easily
app.use("/host",hostRoute);// it handle hostRoute 

{
// replce by userRoute
// app.get("/",(req,res)=>{
// res.send(`<h1> Home page of air bnb<h1>
//   <a href="/add-home"> Goto add home</a>
//   `)
// })





// replce by host router
// app.get("/host/add-home",(req,res)=>{
  //   res.send(`<h1>Register you home</h1>
//     <form action="/host/add-home" method="POST">
//     <input type="text" placeholder="Enter Name" name="hoseName"/>
//     <button type="submit"> Confirm </button>
//     `)
// })

// app.post("/host/add-home",(req,res)=>{
  //   res.send(`<h1>Home Registered successfully.</h1>
//     <a href="/"> Goto Home</a>`)
// })
}

// send status code if we have not handled it using both userRoute and hostRoute
app.use((req,res)=>{
  // res.status(404).send("<h1> Page is not found </h1>")
  // res.send("<h1> it will aslo work page is not found </h1>")
  res.status(404).sendFile(path.join(rootPath,"/views","page404.html"))
})



app.listen(PORT,()=>{
  console.log("Server is running...");
})