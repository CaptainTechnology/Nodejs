{
  /**
   * Express.js – Theory Explanation
Express.js is a web application framework for Node.js. It is used to build web applications and RESTful APIs quickly and easily. It provides many useful features that help developers create server-side applications.

🔷 Definition:
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.

🔷 Purpose of Express.js:
To make it easier to handle HTTP requests and responses

To simplify the process of creating routes (URLs) for different operations

To provide support for middleware, template engines, and static file handling

To help build REST APIs quickly

🔷 Features of Express.js:
Fast and Lightweight: Built on top of Node.js, it is non-blocking and efficient.

Routing: Provides easy-to-use and powerful routing system to handle different URL paths and HTTP methods (GET, POST, etc.).

Middleware Support: Allows the use of middleware functions to modify requests and responses.

Template Engine Support: Can use engines like Pug, EJS, and Handlebars to generate dynamic HTML content.

Serving Static Files: Can serve images, CSS, and JavaScript files using built-in middleware.

REST API Development: Simplifies the creation of RESTful services.

Error Handling: Supports custom error-handling middleware.

🔷 Common Use Cases of Express.js:
Building websites and web applications

Developing backend servers for web and mobile apps

Creating APIs for frontend frameworks like React, Angular, or Vue.js

Hosting static files and handling form submissions

🔷 How Express.js Works:
Express.js receives a request from a client (browser or app).

It checks the route and method (like GET or POST).

It passes the request through any middleware functions.

It sends back the response to the client.

🔷 Advantages of Express.js:
Easy to learn and use

Makes Node.js web development faster

Reduces development time

Has a large community and many useful libraries

Supports reusable middleware components

🔷 Disadvantages of Express.js:
No fixed structure – requires manual organization in large apps

Not suitable alone for very large-scale applications – needs extra tools

Requires understanding of Node.js basics

🔷 Conclusion:
Express.js is a powerful, simple, and flexible web framework for Node.js. It is widely used for building web servers and APIs. Its clean design, middleware support, and routing system make it a popular choice for both beginners and professionals in backend development.
   */
}


const express=require("express")
const PORT=3000;

app.use((req,res,next)=>{
  console.log("this is first middleware function");
  next();
})

{
  /**
   * 

  🔷 app.use()
  ✅ Purpose:
  Used to set up middleware functions. Middleware functions are functions that have access to the request, response, and next objects(move to the next middleware or route)

  Middleware
Functions that process requests before the final response.
Have the signature (req, res, next).
Must call next() to pass control.
Used for tasks like logging, authentication, validation.
Can modify request and response objects.

Handler
Functions that send the final response to the client.

Have the signature (req, res).

Usually do not call next() because they end the request.

Used to return HTML, JSON, or other responses.

  app.use(path, middlewareFunction)
  
  app.use('/admin', (req, res, next) => {
  console.log('Admin area');
  next();
}); apply to admin only, app.use takes middeware function but can takes route function (callbackfunction) but  only if the end of response

middleware function takes 3 argument req res and next object but handler function takes 2 argument req res

Middleware: Does something along the way and calls next().
Handler: Sends the final response and ends the request.



   */
}

app.use((req,res,next)=>{
  console.log("this is second middleware function");
  next();
})
// app.use((req,res,next)=>{
//   res.send("<h1>Welcome to captain coding..</h1>")
// })

// app.get takes handler or middleware or both function in this case it takes hanlder function

app.get("/",(req,res)=>{
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


// app.post can takes handler(req,res) or middleware function(req,res,next) or both at the same time next pass the 

app.post("/contact-us",(req,res)=>{
  res.send(`<h1>This is user detail page in next chapter we will descuss how to parse body and take http request data</h1>`)
})



app.listen(PORT,()=>{
  console.log("Server is running...");
})



// {
//   "Handler_vs_Middleware": {
//     "Handler Function": {
//       "Purpose": "Sends the final response to the client",
//       "Signature": "(req, res)",
//       "Calls_next": "No, usually ends the request",
//       "Role": "Terminates the request by sending a response",
//       "Examples": ["res.send()", "res.json()", "res.render()"],
//       "Number_per_route": "Usually one (final function)",
//       "Usage": "Last function in route callback chain"
//     },
//     "Middleware Function": {
//       "Purpose": "Performs pre-processing on request/response",
//       "Signature": "(req, res, next)",
//       "Calls_next": "Yes, to pass control to next middleware or handler",
//       "Role": "Modifies request/response or passes control",
//       "Examples": ["Logging", "Authentication checks", "Body parsing"],
//       "Number_per_route": "Can be multiple chained before handler",
//       "Usage": "Functions that run before the handler"
//     }
//   },
//   "app_get_post_vs_app_use": {
//     "app.get() / app.post()": {
//       "Purpose": "Define routes for specific HTTP methods (GET, POST)",
//       "HTTP_Methods_Handled": "Only specific methods (GET or POST)",
//       "Arguments": "path, followed by middleware(s) and a handler",
//       "Routing_Behavior": "Matches exact path and method",
//       "Typical_Usage": "Respond to client requests with specific actions",
//       "Can_take_handlers": "Yes, middleware and final handlers",
//       "Order_of_execution": "Runs when path and method match"
//     },
//     "app.use()": {
//       "Purpose": "Register middleware globally or on specific paths",
//       "HTTP_Methods_Handled": "All HTTP methods by default",
//       "Arguments": "Optional path, followed by middleware functions",
//       "Routing_Behavior": "Matches any method and can match path prefixes",
//       "Typical_Usage": "Middleware for logging, authentication, parsing, etc.",
//       "Can_take_handlers": "Typically middleware; can include handler-like functions but applies to all methods",
//       "Order_of_execution": "Runs for any matching path before specific route handlers"
//     }
//   }
// }
