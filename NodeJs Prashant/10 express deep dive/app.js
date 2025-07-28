const express=require("express")
const bodyParser=require("body-parser")
{

  // Body-parser is a middleware in Node.js (especially used with the Express.js framework) that helps parse the body of incoming HTTP requests before your handlers process them.
  // 🔍 Why is it needed?
// When a client (like a browser or mobile app) sends data to a server (e.g., through a form or an API), that data is usually sent in the body of the HTTP request. But by default, Node.js doesn't understand how to extract that body data — this is where body-parser comes in.
// ✅ What does Body-parser do?
// It parses incoming request bodies into a JavaScript object so you can easily access it via req.body.

}

const app=express();
const PORT=3000;

app.get("/",(req,res)=>{
  res.send(`<h1>Hello captain how are you...</h1>
    <br>
    <a href="/contact-us">goto contact </a>`)
})
app.get("/contact-us",(req,res,next)=>{
    console.log("<h1>handling GET for contact-us </h1>");
    res.send(`<h1>Please enter your detail..</h1>
       <form action="/contact-us" method="POST">
    <input type="text" placeholder="Enter your name" name="name"/>
    <input type="text" placeholder="Enter Email" name="email"/>
    <button type="submit">Submit</button>
    `)
})

app.post("/contact-us",(req,res,next)=>{
  console.log(`<h1>before body parser
    name is : ${req.body?.name}
    email is : ${req.body?.email}`)
    next()
})


// we are adding bodyParser.urlencoded() middleware in app.use() someone write the middleware so we have to put it inside app.use there is no need to write bodyPraser midddware manually becouse someone write it already and we have to put it only..

app.use(bodyParser.urlencoded());// this middleware will use for every request "/", chunks works done automatically over here and body parser start from here

app.post("/contact-us",(req,res)=>{
  console.log(`After body parser
    name is : ${req.body.name}
    email is : ${req.body.email}`);
  
  res.send(`<h1>After body parses user detail page</h1>
    <h1> name is : ${req.body.name}</h1>
    <h1> email is : ${req.body.email}</h1>`)
})



app.listen(PORT,()=>{
  console.log("Server is running...");
})