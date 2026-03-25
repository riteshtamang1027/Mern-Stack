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





const addNewTask = ()=>{

    const inputElement = document.getElementById('task');

    const yourtext = inputElement.value.trim();
    // const checkBox = document.createElement('input');

    if(!yourtext){
        return;
    }

    const checkBox = document.createElement('input')

    const item = document.createElement('p')

    item.textContent = yourtext;
    // document.getElementById
    console.log(yourtext);

    document.getElementById('taskList').appendChild(item)

    inputElement.value = ''

}


 const nowDate = new Date()
        console.log(nowDate)
        document.getElementById('display-date').textContent = nowDate.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'})



