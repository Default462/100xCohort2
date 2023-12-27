function printTime() {
    currentDate = new Date();
    // 24-hr format
    strTime = currentDate.toString()
    let timeIn24 = currentDate.toString().split(" ")[4].trim("Z");
    //12 hr format
    var dt = new Date();
    var hours = dt.getHours(); // gives the value in 24 hours format
    var AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    var minutes = dt.getMinutes();
    var seconds = dt.getSeconds();
    if(seconds<10){
        seconds = `0${seconds}`
    }
    var finalTime = "Time  - " + hours + ":" + minutes + ":" + seconds + " " + AmOrPm;

    console.log(currentDate)
    console.log(strTime)
    console.log(`Time in 24 hr format:- ${timeIn24}`)
    console.log(`Time in 12 hr format:- ${finalTime}`)
}


function showTimeEverySec() {
    setTimeout(() => {
        printTime();
        showTimeEverySec()
    }, 1000);
}
showTimeEverySec()
