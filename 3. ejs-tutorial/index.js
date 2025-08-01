// ✅ What is EJS in Node.js?
// EJS stands for Embedded JavaScript Templates.
// It is a template engine used with Express.js to generate HTML pages dynamically using JavaScript. It allows you to embed JavaScript code inside HTML.

const express = require("express");
const path = require("path");
const { title } = require("process");

const app = express();

//set the view engine as ejs
app.set("view engine", "ejs");

//set the directory for the views
app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    title: "Product 1",
  },
  {
    id: 2,
    title: "Product 2",
  },
  {
    id: 3,
    title: "Product 3",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About page" });
});
app.get("/contact",(req,res)=>{
  res.send("about", { title: "About page" });
  // app.render() is a method provided by Express.js that renders a view template (like .ejs, .pug, etc.) but doesn't send it directly to the client. Instead, it returns the rendered HTML as a string.

})

const port = 3001;

app.listen(port, () => {
  console.log("server is running");
});
