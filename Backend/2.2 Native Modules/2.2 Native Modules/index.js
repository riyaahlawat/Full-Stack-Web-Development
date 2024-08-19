const fs = require("fs");

// to write to a file

// fs.writeFile("message.txt", "hello from NodeJS", (err) => {
//     if(err) throw err;
//     console.log("the file has been saved!");
// });

// to read from a file

fs.readFile("./message.txt", "utf8", (err, data) =>{
    if(err) throw err;
    console.log(data);
});