const fs = require('fs');

filePath = 'counter.js'
fs.readFile(filePath, (error, data) => {
    if(error) throw error;
    console.log(data.toString());
})