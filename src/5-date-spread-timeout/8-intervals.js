let counter = 15;
const timer = setInterval(() => {
    console.log(counter);
    counter--;
    if (!counter){
        clearInterval(timer);
    }

}, 1000);
