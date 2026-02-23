// const path = require("path");

// console.log(__dirname); // C:\Users\siddh\OneDrive\Desktop\100xSchool\Backend\Node
// console.log(path.join(__dirname, "index.js")); // C:\Users\siddh\OneDrive\Desktop\100xSchool\Backend\Node\index.js

// Assignment #1 - Create a cli
/*

Create a command line interface that lets the user specify a file path and the
nodejs process counts the number of words inside it.

Input - node index.js /Users/kirat/file.txt
Output - You have 10 words in this file

*/

const fs = require("fs");
const { Command } = require("commander")
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of words in a file')
    .argument('<file>', 'file to count')
    .action((file)=>{
        fs.readFile(file, 'utf-8', (err, data)=>{
            if(err){
                console.log(err);
            }
            else{
                let words = 0;
                for(let i = 0;i<data.length;i++){
                    if(data[i] == " "){
                        words++;
                    }
                }
                console.log(`There are ${words+1} words in ${file}`)
            }
        })
    })

    program.parse()