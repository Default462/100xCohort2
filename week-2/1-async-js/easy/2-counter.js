counter = 0;

function counterUpdate(){
    setTimeout(() => {
        console.log(counter++);
        counterUpdate();
    }, 1000);
}
counterUpdate()