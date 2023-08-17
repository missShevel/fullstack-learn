const complexMath = (n) => {
  new Promise((resolve) => {
    setTimeout(() => {
      let result = n + n;
      console.log(result);
      resolve(result);
    }, 5000);
  })
  .then((result) => new Promise((resolve) => {
      setTimeout(() => {
        result = result * 2;
        console.log(result);
        resolve(result);
      }, 5000)
    })
  );
};

complexMath(2);
