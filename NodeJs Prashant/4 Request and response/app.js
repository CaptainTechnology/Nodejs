const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  // console.log(req);
  console.log("running server");
  // process.exit();// it exit the server
  // console.log("it  will not print");

  // request object// request takes the request from the server (now from browser 3000)

  // console.log(req.url,req.method,req.headers);
  // console.log("url is : ",req.url);// it will be root / now but if we goto the browser and goto the specific url then it will print that url like http://localhoost:3000/product now url will be /product
  // console.log("method  is : ",req.method);// now it is get method
  // console.log("header  is : ",req.headers);

  // sending response : every time the server run it takes a res paramether that is now empty but we can put something on it and send it to the server

  // it is difficult way to take response becouse now we are not using express js this method works before express js
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>http server</title></head>");

  if (req.url === "/") {
    res.write(
      "<body><h1>Nodejs server created using http difficult way </body></h1>"
    );
    res.write("</html>");
    res.end();
    return;
  } else if (req.url === "/products") {
    res.write("<body><h1>this is product page</body></h1>");
    res.write("")
    return res.end();
  }

// we have to return ofter res.end() otherwise it will show error becouse ofter end thee server will be ended so we have to prevent the furter excecution ofter res.end()
// res.write("<head><title>http server</title></head>");
// res.write("<body><h1>404 Error No page is founded</body></h1>");
// res.end();



});

server.listen(PORT, () => {
  console.log(`Server is running on ports http://localhost:3000/`);
});
