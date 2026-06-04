const inputText = document.getElementById("tweet");
const countChar = document.getElementById("count");

const postBtn = document.getElementById("postBtn");
const maxCount = 150;

inputText.addEventListener("keyup", ()=>{
  countChar = inputText.value.length;
    countChar.textContent = `${countChar} / ${maxCount}`;

  if(countChar > 150){
    countChar.style.color = "#F54927";
    postBtn.disabled = true;


  }
})