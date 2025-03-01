import { createReadStream, createWriteStream } from 'fs';
import csvParser from 'csv-parser';
import { write } from 'fast-csv';

// Function to read and parse CSV files using async/await
async function readCsvFile(filePath) {
  const rows = [];
  
  // Return a promise that resolves when the file is fully parsed
  return new Promise((resolve, reject) => {
    console.log(`Reading file: ${filePath}`);
    createReadStream(filePath)
      .pipe(csvParser())  // Pipe it to csv-parser
      .on('data', (data) => {
        console.log('Row parsed:', data); // Debugging: Print each parsed row
        rows.push(data);  // Collect the data in an array
      })
      .on('end', () => {
        console.log(`Finished reading ${filePath}`);
        resolve(rows);  // Resolve the promise with the parsed data
      })
      .on('error', (error) => {
        console.error(`Error reading file ${filePath}:`, error);
        reject(error);  // Reject the promise if an error occurs
      });
  });
}

// Function to merge CSV files using async/await
async function mergeCsvFiles(filePaths, outputFile) {
  const allData = [];
  
  // Iterate over each file and read it
  for (const filePath of filePaths) {
    try {
      const data = await readCsvFile(filePath);
      if (data.length > 0) {
        console.log(`Adding ${data.length} rows from ${filePath}`);
        allData.push(...data);  // Merge the data from each CSV file
      } else {
        console.warn(`No data found in ${filePath}`);
      }
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error);
    }
  }

  // Write the merged data to a new CSV file
  if (allData.length > 0) {
    const ws = createWriteStream(outputFile);
    write(allData, { headers: true }).pipe(ws);
    console.log(`Merged CSV saved to ${outputFile}`);
  } else {
    console.warn('No data to write to merged CSV file.');
  }
}

// List of CSV files to merge and merge them
const filePaths = ['file1.csv', 'file2.csv', 'file3.csv'];
const outputFile = 'merged.csv';
mergeCsvFiles(filePaths, outputFile);
