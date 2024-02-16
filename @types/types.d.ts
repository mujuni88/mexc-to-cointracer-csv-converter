// csv-write-stream.d.ts
declare module "csv-write-stream" {
  import { Duplex } from "stream";

  interface CsvWriterOptions {
    separator?: string;
    newline?: string;
    headers?: string[] | undefined;
    sendHeaders?: boolean;
  }

  interface CsvWriter extends Duplex {}

  export default function csvWriter(options?: CsvWriterOptions): CsvWriter;
}
