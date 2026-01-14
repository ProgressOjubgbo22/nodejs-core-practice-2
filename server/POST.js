const http = require("http");

const server = http.createServer((req, res) => {
    // Handle POST requests to /submit
    if (req.method === "POST" && req.url === "/submit") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Data received", data: body }));
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(5001, () => {
    console.log("POST server running on http://localhost:5001");
});
