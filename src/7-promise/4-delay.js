const delay = async (ms) => {
    // return new Promise(resolve => {
    //     setTimeout(resolve, ms);
    // })
    // return Promise.resolve(setTimeout(() => {}, ms));
    setTimeout(()=>{}, ms);
};

(async () => {
    await delay(3000);
    console.log(1);

})();