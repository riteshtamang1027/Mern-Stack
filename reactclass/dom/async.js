function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some data1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some data2");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1...");

let promise1 = asyncFunction();

promise1.then((result) => {
  console.log(result);
});


console.log("fetching data2...");

let promise2 = asyncFunction();

promise2.then((result) => {
  console.log(result);
});