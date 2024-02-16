#!/usr/bin/env node
import * as fs from 'fs/promises';
import { transformMexcToCoinTracker } from "./convertMexcToCointracker";

async function main(inputFilePath: string, outputDirectory: string) {
  try {
    // Check if the output directory exists, create if it doesn't
    const dirExists = await fs.access(outputDirectory).then(() => true).catch(() => false);
    if (!dirExists) {
      await fs.mkdir(outputDirectory, { recursive: true });
      console.log(`Output directory created at ${outputDirectory}`);
    }

    await transformMexcToCoinTracker(inputFilePath, outputDirectory);
    console.log('Transformation completed successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log('Usage: bun index.ts <inputFilePath> <outputDirectory>');
  process.exit(1);
}
const [inputFilePath, outputDirectory] = args;

main(inputFilePath, outputDirectory);
