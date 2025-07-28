const calculatorHomePage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Calculator Home</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #74ebd5, #ACB6E5);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      background-color: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      text-align: center;
    }

    h1 {
      margin-bottom: 20px;
      color: #333;
    }

    p {
      font-size: 18px;
      color: #666;
      margin-bottom: 30px;
    }

    a {
      text-decoration: none;
      background-color: #4CAF50;
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 16px;
      transition: background-color 0.3s;
    }

    a:hover {
      background-color: #388E3C;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to the Calculator App</h1>
    <p>Perform simple arithmetic operations easily.</p>
    <a href="/calculator">Start Calculating</a>
  </div>
</body>
</html>
`;

const calculatorPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #eef2f3;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .calculator {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      width: 300px;
      text-align: center;
    }

    h2 {
      margin-bottom: 20px;
      color: #333;
    }

    input[type="number"] {
      width: 100%;
      padding: 12px;
      margin: 10px 0;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    button {
      width: 100%;
      padding: 12px;
      margin-top: 15px;
      font-size: 16px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <h2>Simple Calculator</h2>
    <form method="POST" action="/calculate">
      <input type="number" name="num1" placeholder="Enter first number" required />
      <input type="number" name="num2" placeholder="Enter second number" required />
      <button type="submit">Get Result</button>
    </form>
  </div>
</body>
</html>
`;

const  calculateFunction=(first,second)=>{
  try{
    first=Number(first)
    second=Number(second)
  }catch(err){
    console.log(err);
  }
  const result=first+second;
  return result;
}

module.exports={
  calculatorHomePage:calculatorHomePage,
  calculatorPage:calculatorPage,
  calculateFunction:calculateFunction
}