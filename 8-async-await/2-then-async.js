const complexMath = async (n) => {
    const result = await new Promise((resolve) => {
        setTimeout(()=> {
            const res = n + n;
            console.log(res);
            resolve(res)
        }, 5000);
    })

    const newResult = result * 2;
    console.log(newResult);
}

complexMath(2);