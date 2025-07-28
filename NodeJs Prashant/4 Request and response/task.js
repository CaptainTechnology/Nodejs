const style = `<style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f0f2f5;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #4a90e2;
      padding: 15px 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .logo {
      font-size: 24px;
      color: white;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 20px;
      margin: 0;
      padding: 0;
    }

    .nav-links li {
      display: inline;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      text-decoration: underline;
      color: #dbefff;
    }

    .content {
      padding: 60px 30px;
      text-align: center;
    }

    .content h1 {
      font-size: 48px;
      margin-bottom: 20px;
      color: #333;
    }

    .content p {
      font-size: 20px;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  </style>`;

const navbar = `
  <nav>
    <div class="logo">MyWebsite</div>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
  ${style}

`;
const homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home Page</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f0f2f5;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #4a90e2;
      padding: 15px 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .logo {
      font-size: 24px;
      color: white;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 20px;
      margin: 0;
      padding: 0;
    }

    .nav-links li {
      display: inline;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      text-decoration: underline;
      color: #dbefff;
    }

    .content {
      padding: 60px 30px;
      text-align: center;
    }

    .content h1 {
      font-size: 48px;
      margin-bottom: 20px;
      color: #333;
    }

    .content p {
      font-size: 20px;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <div class="content">
    <h1>Welcome to the Home Page</h1>
    <p>This is a simple Node.js web app with a styled navigation bar and a clean homepage layout.</p>
  </div>
</body>
</html>
`;

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(navbar);
  if (req.url === "/") {
    res.write(homePage);
    return res.end();
  } else if (req.url === "/about") {
    res.write("<h1>Welcome to about page</h1>");
    return res.end();
  } else if (req.url === "/contact") {
    res.write("<h1>Welcome to contact page</h1>");
    return res.end();
  } else if (req.url === "/login") {
    res.write("<h1>Welcome to login page</h1>");
    return res.end();
  } else {
  res.write("<h1>Error 404 Page not found!</h1>");
    return res.end();
  }
});

server.listen(3000, () => {
  console.log("sever is running on port http://localhost:3000");
});
