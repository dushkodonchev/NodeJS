import fs from "fs";
import path from "path";

const textFilePath = path.join(import.meta.dirname, "homework.txt");

fs.writeFileSync(textFilePath, "Homework 01 in Basic Node");

fs.appendFileSync(textFilePath, " FINISHED!");

const text = fs.readFileSync(textFilePath, { encoding: "utf-8" });

console.log(text);

// FS sync methods

// const textFilePath = path.join(import.meta.dirname, 'notepad.txt');

// fs.writeFileSync(textFilePath, 'This text is from the sync method');

// fs.appendFileSync(textFilePath, ' appended text')

// const text = fs.readFileSync(textFilePath, {encoding: 'utf-8'});

// console.log('Returned text', text);

// Basic Requirements
// Initialize a new npm project and create an index.js file.
// Using the fs module create a new file called homework.txt
// Create a path to the file using the path module
// Inside the file write the following "Homework 01 in Basic Node"
// Append to the file the following " FINISHED!"
// Read the file contents and print them out in the console.

// FAQ
// Should I use sync or async methods from fs? - Any methods you want, as long as it works without any race condition issues.
// Should I use ES modules or CommonJS - Anything you want, preferably ES modules ("type": "module" in package.json).
// Do I need to send package.json? - Yes.
