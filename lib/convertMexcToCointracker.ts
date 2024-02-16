import fs from "fs";
import csvParser from "csv-parser";
import path from "path";
import csvWriter from "csv-write-stream";

export const transformMexcToCoinTracker = (
  inputFilePath: string,
  outputDirectory: string,
) => {
  return new Promise((resolve, reject) => {
    const timestamp = new Date().toISOString().replace(/[:\-T.]/g, "_");
    const outputFileName = `cointracker_transformed_${timestamp}.csv`;
    const outputPath = path.join(outputDirectory, outputFileName);

    const writer = csvWriter({
      headers: [
        "Date",
        "Received Quantity",
        "Received Currency",
        "Sent Quantity",
        "Sent Currency",
        "Fee Amount",
        "Fee Currency",
      ],
    });

    writer.pipe(fs.createWriteStream(outputPath));

    fs.createReadStream(inputFilePath)
      .pipe(csvParser())
      .on("data", (data) => {
        const currencies = data.Pairs.split("_");
        let receivedCurrency, sentCurrency;
        let receivedQuantity, sentQuantity;

        if (data.Side.toUpperCase() === "BUY") {
          receivedCurrency = currencies[0];
          sentCurrency = currencies[1];
          receivedQuantity = data["Executed Amount"];
          sentQuantity = data.Total;
        } else {
          // Assuming 'SELL'
          receivedCurrency = currencies[1];
          sentCurrency = currencies[0];
          receivedQuantity = data.Total;
          sentQuantity = data["Executed Amount"];
        }

        writer.write({
          Date: data.Time,
          "Received Quantity": receivedQuantity,
          "Received Currency": receivedCurrency,
          "Sent Quantity": sentQuantity,
          "Sent Currency": sentCurrency,
          "Fee Amount": data.Fee,
          "Fee Currency": "USDT",
        });
      })
      .on("end", () => {
        writer.end();
        console.log("Finished reading and transforming CSV.");
        resolve(outputPath); // Resolve the promise with the path to the output file
      })
      .on("error", (error) => {
        console.error("An error occurred:", error);
        reject(error); // Reject the promise if there's an error
      });
  });
};
