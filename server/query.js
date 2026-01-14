const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    // Handle query parameters for GET requests
    if (req.method === "GET" && req.url.startsWith("/user")) {
        const queryObject = url.parse(req.url, true).query;

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Query received", query: queryObject }));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(5002, () => {
    console.log("Query server running on http://localhost:5002");
});
