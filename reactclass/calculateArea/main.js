 const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
const calculateArea = (length, width) => {
 
  area = length * width;
  console.log(area);

  document.getElementById("result").innerText = `The area of the rectangle is: ${area}`
};

calculateArea(length, width);
