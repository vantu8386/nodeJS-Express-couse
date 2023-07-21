const http = require("http");
const port = 3000;
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const dataJson = fs.readFileSync("./dev-data/data.json", "utf8");
  const dataObject = JSON.parse(dataJson);
  const overview = fs.readFileSync("./templates/overview.html", "utf-8");
  const search = fs.readFileSync("./templates/search.html", "utf-8");
  const product = fs.readFileSync("./templates/product.html", "utf-8");

  if (pathname === "/search") {
    let searchQuery = query.q;
    let products = dataObject.filter((data) =>
      data.productName.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    res.write(search);
    res.end();
  } else if (pathname === "/product") {
    res.write(product);
  } else if (pathname === "/" || pathname === "/overview") {
    const modifiedOverviews = dataObject.map((data) => {
      let modifiedOverview = overview;
      modifiedOverview = modifiedOverview
        .replace("{{image}}", data.image)
        .replace("{{productName}}", data.productName)
        .replace("{{quantity}}", data.quantity)
        .replace("{{price}}", data.price);
      return modifiedOverview;
    });

    res.write(modifiedOverviews.join(""));
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Not Found</h1>");
    res.end();
  }
});

server.listen(port, "127.0.0.1", function () {
  console.log(`http://localhost:${port}`);
});

// const http = require("http");
// const port = 3000;
// const fs = require("fs");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   const dataJson = fs.readFileSync("./dev-data/data.json", "utf8");
//   const dataObject = JSON.parse(dataJson);
//   const overviewTemplate = fs.readFileSync(
//     "./templates/overview.html",
//     "utf-8"
//   );
//   const searchTemplate = fs.readFileSync("./templates/search.html", "utf-8");
//   const productTemplate = fs.readFileSync("./templates/product.html", "utf-8");

//   if (pathname === "/search") {
//     const searchTerm = query.q;
//     const products = dataObject.filter((data) =>
//       data.productName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const modifiedSearchResults = products.map((data) => {
//       let modifiedSearchResult = productTemplate;

//       modifiedSearchResult = modifiedSearchResult
//         .replace("{{image}}", data.image)
//         .replace("{{productName}}", data.productName)
//         .replace("{{quantity}}", data.quantity)
//         .replace("{{price}}", data.price)
//         .replace("{{id}}", data.id);

//       return modifiedSearchResult;
//     });

//     res.write(modifiedSearchResults.join(""));
//     res.end();
//   } else if (pathname === "/" || pathname === "/overview") {
//     const modifiedOverviews = dataObject.map((data) => {
//       let modifiedOverview = overviewTemplate;

//       modifiedOverview = modifiedOverview
//         .replace("{{image}}", data.image)
//         .replace("{{productName}}", data.productName)
//         .replace("{{quantity}}", data.quantity)
//         .replace("{{price}}", data.price);

//       return modifiedOverview;
//     });

//     res.write(modifiedOverviews.join(""));
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
//     res.write("<h1>Not Found</h1>");
//     res.end();
//   }
// });

// server.listen(port, "127.0.0.1", function () {
//   console.log(`http://localhost:${port}`);
// });
