/*
n=0;
// do while loop 
console.log("This is do while loop")
do{
    console.log(n)
    n++;
}
while(n<10);


x=1
console.log("This is while loop.")
while(x<=10){
    x=x+1;
    console.log(n)
}

console.log("for loop")
for (n=1;n<=10;n++){
    console.log(n)
}

let age = 18;
if(age <18){
    console.log("Minor")
}
else{
    console.log("Major")
}


let number = 6;
if(number %2==0 && number%3==0){
    console.log(`This is a even number which is divided by 2 and 3` )
}
    /*

/*
 Normal function
function sum(parameters){

}

Arrow function
const sum=(parameters)=>{

}
*/

const sum = (a, b) => {
  return a + b;
};
let total = sum(8, 9);
console.log(total);

function sum1(a, b) {
  console.log(a + b);
}
sum1(2, 8);

const fruits = ["apple","banana","cherry"];

for(let i=0;i<fruits.length;i++){
    console.log(`index[${i}]-> ${fruits[i]}`)
}

fruits.forEach(
    (fruit)=>{
        console.log(fruit)
    }
)
console.log("This is normal function")
fruits.forEach(list_of);
    function list_of(fruit){
        console.log(fruit)
    }



console.log(typeof fruits);

const object = {
  name: "ritesh",
  age: 20,
  email: "ritesh@gmail.con",
};
console.log(typeof object);
