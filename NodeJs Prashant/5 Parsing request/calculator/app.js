

const http=require("http")
const {calculatorHomePage,calculatorPage,calculateFunction}=require("./pages")
const server=http.createServer((req,res)=>{
  res.setHeader("Content-Type","text/html")
  if(req.url==="/"){
    res.write(calculatorHomePage)
    return res.end();
  }else if(req.url==="/calculator"){
    res.write(calculatorPage)
    return res.end();
  }else if(req.url==="/calculate"){
    const data=[]
    req.on("data",(chunks)=>{
      data.push(chunks)
    })
    req.on("end", () => {
      const finalData = Buffer.concat(data).toString();
      console.log(finalData);
    
      const params = new URLSearchParams(finalData);
      const finalObj = Object.fromEntries(params);
      console.log(finalObj);
    
      let num1 = Number(finalObj["num1"]);
      let num2 = Number(finalObj["num2"]);
    
      const result = calculateFunction(num1, num2);
      console.log(result);
    
      // res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
        <h1 style="
          color: #28a745;
          text-align: center;
          font-family: Arial, sans-serif;
          margin-top: 40px;
          font-size: 32px;
        ">
          Show Result
        </h1>
        <p style="
          text-align: center;
          font-size: 24px;
          font-family: sans-serif;
        ">
          Result is: <strong>${result}</strong>
        </p>
      `);
      res.end();
    });
    
  }
  
})

server.listen(3000,()=>{
  console.log("Server is listening on port http://localhost:3000");
})