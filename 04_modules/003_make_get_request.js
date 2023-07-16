import { get } from "https";

get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`\n\n---- https.get res on data chunk is: \n${chunk}`);
  });

  res.on("end", () => {
    console.log(`\n\n---- https.get res on end`);
  });
});