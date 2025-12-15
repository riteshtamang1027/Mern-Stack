import {useState } from "react";

export default function App(props) {
  const [count, setCount] = useState(0);
  const sumf =()=>{
    let num1 = 23
    let num2= 21
   let sum = 0
   sum = num1 + num2;
   alert("the sum of the given number is "+sum)
  }
 
 const myfun= ()=>{
  let x = 12;
  let y="Banana";
  if(x<10){
    y="Apple"
  }

  alert("This is a "+y)

  }
  return (
    <div className='text-2xl'>
     <p> Hello World!</p>
      <button onClick={()=>setCount(count+1)}  className="border border-gray-300 bg-gray-200 shadow-2xl rounded-md px-2 py-1">Click Here {count}</button>

        <button onClick={sumf} className="border border-gray-300 bg-gray-200 shadow-2xl rounded-md px-2 py-1 cursor-pointer">Click Here   </button>

        <button onClick={myfun} className="border border-gray-300 bg-gray-200 shadow-2xl rounded-md px-2 py-1 cursor-pointer">Click Here   </button>

    </div>
  )
}

