const getPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am a promise and I am being executed immediately.");
      resolve("I am a resolved promise. Handle me using .then().");
    //   reject("I am a rejected promise. Handle me using .catch().");
    }, 5000);
  });
};

let promise = getPromise();

promise.then((result) => {
  console.log("Promise handled successfully." + result);
});

promise.catch((err) => {
  console.log("Promise handled with error." + err);
});

