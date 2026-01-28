const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Hello from Node App using Jenkins Pipeline!");
});
server.listen(3001, () => {
    console.log("Server running on port 3000");
});
