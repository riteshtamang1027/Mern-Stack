let initial = 0;
// this function increase the followers
const increasingFollow = () => {
  initial += 1;
  document.getElementById("count").innerText = `${initial}`;
};

// this function decrease the followers
const decreaseFollow = () => {
  if (initial > 0) {
    initial--;
    document.getElementById("count").innerText = `${initial}`;
  }
};
