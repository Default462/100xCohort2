const fs = require("fs");


const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (error)=> {
        if(error) throw error;
        console.log("data saved successfully");
    })
}


const cleanFile = (fileName) => {
    fs.readFile(fileName, (error, data) => {
        if(error) throw error;
        cleanedData = data.toString().replace(/\s+/g,' ').trim();
        console.log(cleanedData);
        writeToFile(fileName, cleanedData);
        return cleanedData
    })
}


cleanFile('sampleFileForFileCleaner.txt')