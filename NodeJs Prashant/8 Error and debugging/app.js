
const http=require("http")
const PORT=3000;
const SyntaxError=require("./Syntax")
const runtimeError=require("./runtime")
const logicalEroor=require("./logical")
const area=require("./practice")
const areaIs=area(4,3)
console.log(areaIs);

const server=http.createServer((req,res)=>{
  // testSyntax();
  // runtimeError()
  // logicalEroor()

  return res.end();
})

server.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`);
})
