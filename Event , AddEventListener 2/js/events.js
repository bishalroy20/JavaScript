// option 1 and 2
function makered() {
  document.body.style.backgroundColor = "red";
}
function makewhite() {
  document.body.style.backgroundColor = "white";
}

// for option 3
const blueButton = document.getElementById("btn-make-blue");
blueButton.onclick = function makeblue() {
  document.body.style.backgroundColor = "blue";
};

//for option 4
const purplebtn = document.getElementById("btn-make-purple");
purplebtn.onclick = makepurple;

function makepurple() {
  document.body.style.backgroundColor = "purple";
}

// for option 5
// document.getElementById(id name).addEventListener('event name', function name)

document
  .getElementById("btn-make-green")
  .addEventListener("click", function makegreen() {
    document.body.style.backgroundColor = "green";
  });

// for option 6
document
  .getElementById("btn-update-text")
  .addEventListener("click", function () {
    const titletext = document.getElementById("title-text2");
    titletext.innerText = "Ami notun text .";
  });

document.getElementById("login-btn").addEventListener("click", function () {
  const titletext = document.getElementById("user-number");
  titletext.innerText = "1 User";
});

// for option 7
document.getElementById("update-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  // console.log(inputValue);

  // clear the input field
  inputField.value = "";

  const namepara = document.getElementById("name-para");
  namepara.innerText = inputValue;
});

//for option 8
document.getElementById("post-cmt").addEventListener("click", function () {
  console.log("post cmt button clicked");
  const textarea = document.getElementById("text-box");
  const comment = textarea.value;
  // console.log(comment);
  // user input dile value hishebe pabo
  //h1 p er moddhe innertext hishebe set hobe

  const commentContainer = document.getElementById("comment-container");

  // now create a paragraph tag
  const commentElement = document.createElement("p");
  commentElement.innerText = comment;
  commentContainer.appendChild(commentElement);

  // clear the textarea
  textarea.value = "";
});

// for option 9
//mouse events(mouseenter, mouseout, mousemove)

// document.getElementById('btn-mouse').addEventListener('mouseenter',function(){
//     console.log('mouse enter korse');
// })

// document.getElementById('btn-mouse').addEventListener('mousemove',function(){
//     console.log('mouse enter korse');
// })

document.getElementById("input-mouse").addEventListener("focus", function () {
  console.log("input field e focus korse");
});

document.getElementById("input-mouse").addEventListener("blur", function () {
  console.log("input field theke ber hoye gese");
}); //blur mane input field er bahire click korce

//keydown, keyup, keypress event

document
  .getElementById("input-mouse")
  .addEventListener("keyup", function (event) {
    console.log(event.target.value);
  });
document
  .getElementById("input-mouse")
  .addEventListener("keydown", function (event) {
    console.log(event.target.value);
  });
