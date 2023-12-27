/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    setTimeout(()=>{
        console.log(`Ran wait1`)
    },t*1000)
}

function wait2(t) {
    setTimeout(()=>{
        console.log(`Ran wait2`)
    },t*1000)
}

function wait3(t) {
    setTimeout(()=>{
        console.log(`Ran wait3`)
    },t*1000)
}

function calculateTime(t1, t2, t3) {
    promise1 = Promise.resolve(wait1(t1))
    promise2 = Promise.resolve(wait2(t2))
    promise3 = Promise.resolve(wait3(t3))

    Promise.all([promise1,promise2,promise3])

}

calculateTime(2,3,4);