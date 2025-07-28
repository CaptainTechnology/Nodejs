// using module

const http=require("http");
const PORT=3000;
const {serverHandler,informatio,third,fourth}=require("./data")
const server=http.createServer(serverHandler)

informatio();
console.log(third,fourth);


server.listen(PORT, () => {
  console.log("server is running on http://localhost:3000");
});