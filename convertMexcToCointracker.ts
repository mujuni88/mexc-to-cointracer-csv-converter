
import fs from 'fs';
import csvParser from 'csv-parser';
import path from 'path';
import csvWriter from 'csv-write-stream';

var writer = csvWriter({
  headers: [
    'Date',
    'Received Quantity',
    'Received Currency',
    'Sent Quantity',
    'Sent Currency',
    'Fee Amount',
    'Fee Currency'
  ]
})

interface MexcRecord {
  Pairs: string;
  Time: string;
  Side: string;
  'Filled Price': number;
  'Executed Amount': number;
  Total: number;
  Fee: number;
  Role: string;
}


export const transformMexcToCoinTracker = async (inputFilePath: string, outputDirectory: string) => {
  const timestamp = new Date().toISOString().replace(/[:\-T.]/g, '_');
  const outputFileName = `cointracker_transformed_${timestamp}.csv`;
  const outputPath = path.join(outputDirectory, outputFileName);
  writer.pipe(fs.createWriteStream(outputPath))



  fs.createReadStream(inputFilePath)
    .pipe(csvParser())
    .on('data', (data: MexcRecord) => {
      const currencies = data.Pairs.split('_');
      let receivedCurrency, sentCurrency;
      let receivedQuantity, sentQuantity;

      if (data.Side.toUpperCase() === 'BUY') {
        receivedCurrency = currencies[0];
        sentCurrency = currencies[1];
        receivedQuantity = data['Executed Amount'];
        sentQuantity = data.Total;
      } else { // Assuming 'SELL'
        receivedCurrency = currencies[1];
        sentCurrency = currencies[0];
        receivedQuantity = data.Total;
        sentQuantity = data['Executed Amount'];
      }

      writer.write([data.Time, receivedQuantity, receivedCurrency, sentQuantity, sentCurrency, data.Fee, 'USDT'])
    })
    .on('end', () => {
      console.log('Finished reading and transforming CSV.');
      writer.end();
    });
};