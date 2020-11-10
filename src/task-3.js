const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// 2 варианта, в 1м выпадала ошибка "Uncaught (in promise) undefined" отловить в rejecte не получилось

// Кривой, но рабочий
// const makeTransaction = transaction => {
//     const delay = randomIntegerFromInterval(200, 500);
//     const canProcess = Math.random() > 0.3;

//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (canProcess) {
//         resolve(logSuccess(transaction.id, delay));
//       } else {
//         reject(logError(transaction.id))
//       }
//     }, delay);
//   });
// };

//  Рабочий
const makeTransaction = transaction => {
  transaction.delay = randomIntegerFromInterval(200, 500);
  const canProcess = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (canProcess) {
      resolve(transaction);
    } else {
      reject(transaction)
    }
  }, transaction.delay);
});
};

function logSuccess({id, delay}){
    console.log(`Transaction ${id} processed in ${delay}ms`);
  };

function logError({id}){
    console.warn(
      `Error processing transaction ${id}. Please try again later.`
    );
  };


// Кривой, но рабочий
// makeTransaction({ id: 70, amount: 150 }).catch(e => {})

// makeTransaction({ id: 71, amount: 230 }).catch(e => {})

// makeTransaction({ id: 72, amount: 75 }).catch(e => {})

// makeTransaction({ id: 73, amount: 100 }).catch(e => {})


// Рабочий
makeTransaction({ id: 70, amount: 150 }).then(logSuccess, logError)

makeTransaction({ id: 71, amount: 230 }).then(logSuccess, logError)

makeTransaction({ id: 72, amount: 75 }).then(logSuccess, logError)

makeTransaction({ id: 73, amount: 100 }).then(logSuccess, logError)
