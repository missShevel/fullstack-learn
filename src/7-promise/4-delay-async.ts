const delay = (ms: number): Promise<undefined> => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
};

delay(3000).then(() => console.log(1));

export {}
