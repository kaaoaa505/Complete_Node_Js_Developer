import http from "http";

const server = http.createServer((_req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Any-Custom-Message": "Just for Test!.",
  });
  res.end(
    JSON.stringify({
      id: 1,
      name: "Khaled Allam",
    })
  );
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running: http://localhost:${PORT}`);
});
