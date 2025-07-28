const userInputPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>User Input Page</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(120deg, #89f7fe, #66a6ff);
      margin: 0;
      padding: 0;
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }

    .container {
      background-color: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      width: 100%;
      max-width: 400px;
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    textarea {
      width: 100%;
      padding: 12px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
      font-size: 16px;
    }

    textarea {
      resize: vertical;
      height: 100px;
    }

    button {
      width: 100%;
      padding: 12px;
      background-color: #4a90e2;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #357ab8;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>User Input Form</h2>
    <form method="POST" action="/user-data">
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Your Email" />
      <input type="password" name="password" placeholder="Password" />
      <textarea name="message" placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</body>
</html>
`;


const informatio=()=>{
  console.log("Second Method inside data.js");
  
}

const fs=require("fs")

const serverHandler=(req,res)=>{
  res.setHeader("Content-Type","text/html")
  if(req.url==="/"){
    res.write(userInputPage);
    return res.end();
  }else if(req.url.toLocaleLowerCase()==="/user-data" && req.method==="POST"){
    const chunks=[]
    req.on("data",(chunk)=>{
      // console.log(chunk);
      chunks.push(chunk)
    })

    // console.log("chunks data is : ",chunks);

    req.on("end",()=>{
      const finalData=Buffer.concat(chunks).toString();
      console.log(finalData);
      const params=new URLSearchParams(finalData)

      // const DataObj={}
      // console.log(params.entries());// it iterator
      // for(const [key,value] of params.entries()){
      //   DataObj[key]=value;
      // }
      // console.log(DataObj);
      
      // or

      const ObjData=Object.fromEntries(params)
      console.log(ObjData);
      fs.writeFileSync("userData.txt",JSON.stringify(ObjData));
      fs.appendFileSync("oldAndNew",JSON.stringify(ObjData))
      
    })
    
    res.statusCode=302;
    res.setHeader("Location","/")
    
    return res.end();
  }else if(req.url==="/product"){
    res.write("<html>")
    res.write("<title>")
    res.write("Product")
    res.write("</title>")
    res.write("<body>")
    res.write("<h1>Product list is over here...</h1>")
    res.write("</body>")
    res.write("</html>")
    return res.end();
  }
  res.write("<html>")
  res.write("<title>")
  res.write("user-data")
  res.write("</title>")
  res.write("<body>")
  res.write("<h1 style='color:red; margin-top:50vh; margin-left:30vw'>Error 404 Page is not found</h1>")
  res.write("</body>")
  res.write("</html>")
  return res.end();
}


module.exports={
  serverHandler:serverHandler,
  informatio:informatio
};

const third="it is third data"
const fourth="it is fourth data"
module.exports.third=third;
module.exports.fourth=fourth;