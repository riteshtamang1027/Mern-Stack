const btn = document.getElementById("button");

const result = document.getElementById("result");

function handleEvent(){
    result.textContent = `Hello I am Ritesh.`
}

btn.addEventListener("click",handleEvent);


const input = document.getElementById("input");

const inputText = (e)=>{
    result.textContent = `Your typed: ${e.key}`;
    
}

input.addEventListener('keydown',inputText);