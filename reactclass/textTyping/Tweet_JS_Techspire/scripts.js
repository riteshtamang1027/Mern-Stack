const tweetInput = document.getElementById("tweet-input");
const charCounter = document.getElementById("char-counter");
const postBtn = document.getElementById("post-btn");
const draftMsg = document.getElementById("draft-msg");

const maxChar = 150;

tweetInput.addEventListener("keyup", function (){

  const currentLength = tweetInput.value.length; 


  charCounter.textContent = currentLength + " / " + maxChar;

  if(currentLength > maxChar){
    charCounter.style.color = "#E33B19";
    postBtn.disabled = true;
  }
   else if(currentLength > 140){
    charCounter.style.color = "#d4ae16";
    postBtn.disabled = false;
  }

  else if(currentLength === 0){
    charCounter.style.color = "#19E381";
    postBtn.disabled = true;
  }
  else{
    charCounter.style.color = "#19E381";
    postBtn.disabled = false;
  }

})

tweetInput.addEventListener("change", ()=>{
  if(tweetInput.value.length > 0){
    draftMsg.textContent = "Draft saved!";

    setTimeout( ()=>
    {
      draftMsg.textContent = "";
    }, 2000)
  }
})

postBtn.addEventListener("click", ()=>{
  const storeText = tweetInput.value;

  alert(`You posted: ${storeText}`)

  tweetInput.value = "";
  charCounter.textContent = 0 +" / " +maxChar;
  postBtn.disabled = true;
  draftMsg.textContent = "";
    charCounter.style.color = "#19E381";

})