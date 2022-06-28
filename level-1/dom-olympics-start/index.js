const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!";
h1.className = "header";
document.getElementById("header").appendChild(h1);

const subTitle = document.createElement("subTitle");
subTitle.innerHTML = "<span class='name'>Amy</span> wrote the JavaScript";
subTitle.className = "header";
document.getElementById("header").appendChild(subTitle)

const messages = document.getElementsByClassName("message");
messages[0].textContent = "Good morning!";
messages[1].textContent = "Hi there!";
messages[2].textContent = "Did you sleep well?";
messages[3].textContent = "Yes, thank you!";

const inputBox = document.getElementById("input");
inputBox.value = "Great! Goodbye!";

// document.getElementsByClassName("message").addEventListener("click", handleButton);

// function handleButton() {
//     messages.length.textContent = "";
   
// }


// document.getElementsByClassName
// console.log(messages.length)





