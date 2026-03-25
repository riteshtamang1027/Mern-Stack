// Event listner 

const ptag = document.querySelector('p');
// ptag.addEventListener("click",()=>{
//  let sum =  "The text has been clicked.";
//  ptag.innerHTML=(sum);
// })


const btn = document.querySelector('#btn');
const changeColor = ()=>{
    ptag.classList.toggle("default");
    ptag.classList.toggle("new_color")

}


// const btn = document.querySelector("#btn");

// document.addEventListener("mousemove", (e) => {
//     btn.style.left = e.clientX + "px";
//     btn.style.top = e.clientY + "px";
// });

const clicked = (event)=>{
    console.log(event)
    // event.target -> the element that triggered the event
    // event.type -> the name of the event that happend
        //  eg. submit, click, mouseover, key down 
    // event.preventDefault() -> stops the browser's default behavior
        // eg. on form submit, it doesn't allow the browser to refresh
}

// clicked()


// element.parentElement 
// element.children
// element.firstElementChild
// element.lastElementChild
// element.nextElementSibling 


// child Insertion 
    // element.appendChild(newnode) -> adds a node as the last child of a parent
    // element.prepend(newnode) -> adds node as the first child
    // element.insertBefore(newNode, referenceNode) (n1, 4) -> insert relative to a specific existing child

// sibling Insertion
    // element.before(newnode)-> insert as a sibling before the Element
    // element.after(newnode)-> insert as a sibling after the element 

// div 
//  -1
//  -2
//  -3
//  -n1 -> insertBefore(n1, 4)
//  -4


//  newdiv2(before)
//  div
//  newdiv(after)

