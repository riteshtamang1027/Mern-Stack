function addTodo(){
    const input = document.querySelector("#addText")
    if (!input.value.trim()){
        return;
    }
    const text = input.value
    // console.log(text)

    const li = document.createElement("li")

    // li.innerText = text;
    li.textContent = text;

    li.onclick = ()=> li.classList.toggle("done")

    const deleteBtn = document.createElement("button")

    deleteBtn.textContent = "X"
    deleteBtn.classList.add("ertyu")

    deleteBtn.onclick=()=>{
        li.remove();
    }
    li.appendChild(deleteBtn);

    document.getElementById("addlist").appendChild(li);
    input.value = ""


}


// const addTodo =()=>{

// }










function handleTask (){

const inputElement = document.getElementById("task");
 
const insertTask = inputElement.value.trim();
const getTime = taskGenerateTime();


if(!insertTask){
    return;
}

const addTask = taskFormate(insertTask,getTime);

document.getElementById("taskList").appendChild(addTask)
inputElement.value = '';

}


function taskFormate (task,time){
    const div = document.createElement('div');
    div.classList.add("task-list")

    div.innerHTML = `
     <div class="list_ckeck">
          <input class="checked" type="checkbox" />
          <p class="task">${task}</p>
        </div>
        <span class="time">${time}</span>
    
    `
    return(div)
}

function taskGenerateTime(){
    return  new Date().toLocaleTimeString('en-US',{hour:"numeric",minute:"2-digit"});
}

const nowDate = new Date();

console.log(nowDate);

document.getElementById('display-date').textContent= nowDate.toLocaleDateString("en-US",{weekday:'long',month:'long',day:"numeric"}) 
