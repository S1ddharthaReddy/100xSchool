// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function cleanFile(filePath, callback){
    fs.readFile(filePath, "utf-8", function(err, data){
        if(err){
            console.log("Error while reading the file");
        }
        else{
            const trimmedContent = data.trim().replace(/\s+/g, " ");
            fs.writeFile(filePath, trimmedContent, function(err, data){
                callback();
            })
        }

    })
}

cleanFile("somefile.txt", function(){
    console.log("Completed the task assigned!!!")
});

