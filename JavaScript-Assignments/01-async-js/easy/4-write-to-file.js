// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("something.txt", "The song of Ice & Fire", function(err){
    if(err){
        console.log(err);
    } else {
        fs.readFile("something.txt", "utf-8", function(err, data){
            if(err){
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});