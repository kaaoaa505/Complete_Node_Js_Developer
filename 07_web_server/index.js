import http from "http";

const server = http.createServer((_req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Khaled-Allam": "Just for Test!.",
  });
  res.end("Hello world!.");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running: http://localhost:${PORT}`);
});
