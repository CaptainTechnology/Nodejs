
// creating first node js server

const http=require("http")

// function requestListner(req,res){
//   console.log(req);
// }

// http.createServer(requestListner);
// // or
// http.createServer(function requestListner(req,res){
//   console.log(req);
// })
// // or
// http.createServer(function(req,res){
//   console.log(req);
// })
// // or

// http.createServer((req,res)=>{
//   console.log(req);
// })

// server should be active to handle request and respone so we have to listen it on any port

// const server=http.createServer((req,res)=>{
//   console.log(req);
// })
// // uppder http.cs function return a object in which we have to listen


// server.listen(3000);
// // port number is a number in which our server will hit req and response couse in a system multiple income request can be come


const PORT=3000;
const server=http.createServer((req,res)=>{
  console.log(req);
})

server.listen((PORT),()=>{
  console.log(`Server is running on port http:localhost:3000`);
  
})