let promiseActive = true;

const myPromise1 = new Promise((resolve, reject) => {
  if (promiseActive) {
    resolve("---- this is myPromise1 resolve result.");
  } else {
    reject("---- this is myPromise1 reject result.");
  }
});

const myPromise2 = new Promise((resolve, reject) => {
  if (promiseActive) {
    resolve("---- this is myPromise2 resolve result.");
  } else {
    reject("---- this is myPromise2 reject result.");
  }
});

const myPromise3 = new Promise((resolve, reject) => {
  if (promiseActive) {
    resolve("---- this is myPromise3 resolve result.");
  } else {
    reject("---- this is myPromise3 reject result.");
  }
});

const myPromise4 = new Promise((resolve, reject) => {
  if (promiseActive) {
    resolve("---- this is myPromise3 resolve result.");
  } else {
    reject("---- this is myPromise3 reject result.");
  }
});

async function run() {
  await myPromise1.then((result) => console.log(result));

  await myPromise1.then((result) => console.log(result));

  await myPromise1.then((result) => console.log(result));

  await Promise.all([
    myPromise1,
    myPromise2,
    myPromise3,
    myPromise4
  ]).then( values => console.log(values));

  await Promise.all([
    myPromise1,
    myPromise2,
    myPromise3,
    myPromise4
  ]).then( values => console.log(values));

  await Promise.all([
    myPromise1,
    myPromise2,
    myPromise3,
    myPromise4
  ]).then( values => console.log(values));
}
run();
