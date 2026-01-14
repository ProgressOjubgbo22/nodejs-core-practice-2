const http = require("http");

const server = http.createServer((req, res) => {
    // Handle GET requests
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Homepage");
    } else if (req.method === "GET" && req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});

server.listen(5000, () => {
    console.log("GET server running on http://localhost:5000");
});
