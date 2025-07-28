
const { SERVFAIL } = require("dns");
const http=require("http")
const PORT=3000;

const server=http.createServer((req,res)=>{
  res.setHeader("Content-Type","text/html")
  res.write("Server is running....")
  return res.end();
})

server.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`);
})