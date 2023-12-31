function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then((n) => {
    console.log('result: ', n);
    return increaseAndPrint(n);
  })
  .then((n) => {
    console.log('result: ', n);
    return increaseAndPrint(n);
  })  
  .then((n) => {
    console.log('result: ', n);
    return increaseAndPrint(n);
  })  
  .then((n) => {
    console.log('result: ', n);
    return increaseAndPrint(n);
  })  
  .then((n) => {
    console.log('result: ', n);
    return increaseAndPrint(n);
  })  
  .then((n) => {
    console.log('result: ', n);
    return increaseAndPrint(n);
  })
  .catch((error) => {
    console.log(error);
  });

