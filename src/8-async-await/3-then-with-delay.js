const complexMath = async (n) => {
  let res = await new Promise((resolve) => {
    setTimeout(() => {
      const result = n + n;
      console.log(result);
      resolve(result);
    }, 5000);
  })
  const newResult = await new Promise((resolve) => {
      setTimeout(() => {
        res = res * 2;
        resolve(res);
      }, 5000)
    })
    console.log(newResult);
};

complexMath(2);
