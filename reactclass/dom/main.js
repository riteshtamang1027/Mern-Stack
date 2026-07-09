const taskInput = document.getElementById("task");
const addTask = document.getElementById("addTask");
const listTask = document.getElementById("taskList");
const taskClear = document.getElementById("clearTask");


function addTasks (){
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        return;
    }

    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.textContent = taskText;
    btn.textContent = "X";

    li.addEventListener('click', function (){
        if(li.style.textDecoration === 'line-through'){
            li.style.textDecoration = 'none';
            li.style.color= 'black';
        }
        else{
             li.style.textDecoration = 'line-through';
            li.style.color= 'gray';
        }

    })
 console.log(taskText)
    listTask.appendChild(li)
    listTask.append(btn)
    taskInput.value = '';


}

addTask.addEventListener('click', addTasks)


taskInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addTasks()
    }
});

