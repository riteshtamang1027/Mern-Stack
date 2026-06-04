// ─── Step 1: Grab all the elements we need ───
const tweetInput = document.getElementById("tweet-input");
const charCounter = document.getElementById("char-counter");
const postBtn = document.getElementById("post-btn");
const draftMsg = document.getElementById("draft-msg");

const MAX_CHARS = 140;

// ─── Step 2: KEYDOWN — update counter on every keystroke ───
// We use 'keyup' here instead of 'keydown' because:
// - keydown fires BEFORE the character is added to the textarea
// - keyup fires AFTER — so textarea.value already has the new character
// This gives us an accurate count.

tweetInput.addEventListener("keyup", function () {
  const currentLength = tweetInput.value.length;

  // Update the counter text
  charCounter.textContent = currentLength + " / " + MAX_CHARS;

  // Change color based on limit
  if (currentLength > MAX_CHARS) {
    // Over limit — red counter, disable button
    charCounter.style.color = "#e74c3c";
    postBtn.disabled = true;
  } else if (currentLength === 0) {
    // Empty — green counter, disable button (can't post nothing)
    charCounter.style.color = "#2ecc71";
    postBtn.disabled = true;
  } else {
    // Within limit and not empty — green counter, enable button
    charCounter.style.color = "#2ecc71";
    postBtn.disabled = false;
  }
});

// ─── Step 3: CHANGE — show "Draft saved!" when user clicks away ───
// The 'change' event fires when the textarea loses focus
// AND its value has changed since it was last focused.

tweetInput.addEventListener("change", function () {
  // Only show the message if there's actual text
  if (tweetInput.value.length > 0) {
    draftMsg.textContent = "Draft saved!";

    // Auto-hide the message after 2 seconds
    setTimeout(function () {
      draftMsg.textContent = "";
    }, 2000);
  }
});

// ─── Step 4: CLICK — handle the Post button ───
postBtn.addEventListener("click", function () {
  const tweetText = tweetInput.value;

  // Show the tweet (in a real app, this would send to a server)
  alert("You posted: " + tweetText);

  // Clear everything and reset
  tweetInput.value = "";
  charCounter.textContent = "0 / " + MAX_CHARS;
  charCounter.style.color = "#2ecc71";
  postBtn.disabled = true;
  draftMsg.textContent = "";
});
