# MEXC to Cointracker CSV Converter

A versatile Node.js library and command-line tool for transforming CSV data from [MEXC Global](https://www.mexc.com/) format to a [format compatible](https://support.cointracker.io/hc/en-us/articles/4413071299729-Importing-Transaction-Histories-to-CoinTracker-Using-CSVs) with Cointracker. This tool facilitates the import of cryptocurrency transaction data into Cointracker for tax calculation purposes.

## Features

- Convert MEXC CSV exports into Cointracker-compatible CSV files.
- Can be used programmatically in Node.js projects or as a standalone command-line tool.
- Automated output directory creation and timestamped output files for easy organization.

## Installation

### As a Node.js Library

Install the library in your project using npm:

```bash
npm install mexc-to-cointracker-csv-converter
```

Or using bun:

```bash
bun add mexc-to-cointracker-csv-converter
```

### As a Command-Line Tool

To use it as a global command-line tool, install it globally:

```bash
npm install -g mexc-to-cointracker-csv-converter
```

Or with bun:

```bash
bun add --global mexc-to-cointracker-csv-converter
```

## Usage

### In Node.js Projects

You can import the `transformMexcToCoinTracker` function in your project to convert CSV files programmatically:

```jsx
import { transformMexcToCoinTracker } from 'mexc-to-cointracker-csv-converter';

const inputFilePath = './path/to/mexc.csv';
const outputDirectory = './path/to/output';

transformMexcToCoinTracker(inputFilePath, outputDirectory)
  .then(() => console.log('Conversion completed successfully.'))
  .catch(error => console.error('Error:', error));
```

### As a Command-Line Tool

After installing the package globally, you can directly convert CSV files from the command line:

```bash
mexc-to-cointracker <inputFilePath> <outputDirectory>
```

- `<inputFilePath>`: The path to your input CSV file from MEXC Global.
- `<outputDirectory>`: The path to the directory where you want the converted CSV file to be saved.

Example:

```bash
mexc-to-cointracker ./data/mexc_transactions.csv ./output
```

This command reads transactions from `mexc_transactions.csv`, converts them, and saves the output to the specified `./output` directory.

## Contributing

Contributions to improve this tool are welcome. Feel free to fork the repository, make your changes, and submit a pull request.