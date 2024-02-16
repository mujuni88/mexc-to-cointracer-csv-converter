# MEXC to Cointracker CSV Transformer

## Overview

[MEXC Global](https://www.mexc.com/) is a centralized cryptocurrency exchange platform where users can trade various cryptocurrencies. For tax reporting purposes, users often need to export their trade history. [Cointracker](https://www.cointracker.io/home) is a cryptocurrency tax software that simplifies tax reporting by automating the calculation of taxes based on users' transaction histories. This project bridges the gap between [MEXC Global](https://www.mexc.com/) and [Cointracker](https://www.cointracker.io/home) by providing a tool that transforms CSV exports from MEXC into a [ format ](https://support.cointracker.io/hc/en-us/articles/4413071299729-Importing-Transaction-Histories-to-CoinTracker-Using-CSVs) compatible with [Cointracker](https://www.cointracker.io/home), enabling seamless import and tax calculations.

## Features

- CSV Transformation: Converts transaction records from MEXC CSV format to [Cointracker](https://www.cointracker.io/home) CSV format.
- Automated Directory Management: Automatically creates output directories if they don't exist.
- Timestamped Output Files: Names output files with timestamps to ensure uniqueness and easy identification.

## Getting Started

### Prerequisites

- This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
- `yarn` or `npm` should still work

### Installation

1. Clone the Repository
    
    ```bash
    git clone <repository-url>
    ```
    
    Replace `<repository-url>` with the URL of the GitHub repository.
    
2. Navigate to Project Directory
    
    ```bash
    cd path/to/project
    ```
    
3. Install Dependencies
    
    ```bash
    bun install
    ```
    

### Usage Instructions

1. Prepare Your CSV File
    
    Export your transaction history from [MEXC Global](https://www.mexc.com/) as a CSV file.
    
2. Run the Transformer
    
    Execute the transformation script using Bun with the following command:
    
    ```bash
    bun run index.ts <inputFilePath> <outputDirectory>
    ```
    
    - `<inputFilePath>`: Path to the MEXC CSV file.
    - `<outputDirectory>`: Destination directory for the transformed [ Cointracker-compatible ](https://support.cointracker.io/hc/en-us/articles/4413071299729-Importing-Transaction-Histories-to-CoinTracker-Using-CSVs) CSV file.
    
    Example:
    
    ```bash
    bun run index.ts ./data/mexc_transactions.csv ./output
    ```
    

### How It Works

The `index.ts` script initiates the transformation process, which involves reading the MEXC transaction records, converting them into the [Cointracker](https://www.cointracker.io/home) format, and outputting the result to a new CSV file. This process facilitates the easy import of transaction data into [Cointracker](https://www.cointracker.io/home) for accurate tax calculations.

### Contributing

Your contributions are welcome! Whether it's improving the transformation logic, fixing bugs, or enhancing documentation, please feel free to fork the repository, make your changes, and submit a pull request.