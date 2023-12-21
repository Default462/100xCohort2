const { error } = require("console");
const fs = require("fs");

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (error)=> {
        if(error) throw error;
        console.log("data saved successfully");
    })
}

writeToFile("test.txt", "Sample Data to test write to file");