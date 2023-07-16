import { open } from "node:fs/promises";
import { parse } from "csv-parse";

const fd = await open("./data/cumulative_2023.07.16_04.51.57.csv");

const stream = fd.createReadStream();

let dataResults = [];

stream
.pipe(parse({
    comment: '#',
    columns: true
}))
  .on("data", (chunk) => {
    // dataResults.push(chunk.toString());
    dataResults.push(chunk);
  })
  .on("error", function (err) {
    console.error(err.message);
  })
  .on("end", () => {
      console.log("✅ dataResults[0]    ", dataResults[0]);
    //   const records = [];
    const records = dataResults;

    // Initialize the parser
    const parser = parse({
      delimiter: ":",
    });

    // Use the readable stream api to consume records
    parser.on("readable", function () {
      let record;
      while ((record = parser.read()) !== null) {
        records.push(record);
      }
      console.log("✅ record    ", record);
    });
    // Catch any error
    parser.on("error", function (err) {
      console.error(err.message);
    });

    // Test that the parsed records matched the expected records
    parser.on("end", function () {
      log;
    });
  });
