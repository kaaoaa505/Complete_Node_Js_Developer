import { request } from "https";

const req = request("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`\n\n---- https.request res on data chunk is: \n${chunk}`);
  });

  res.on("end", () => {
    console.log(`\n\n---- https.request res on end`);
  });
});

req.end();
