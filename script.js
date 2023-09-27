let display = document.querySelector("#display");
let input = document.querySelectorAll("button");
let title = document.querySelector("h1");

let text = "Vitale Luca Jr FrontEnd Dev";

function generateLetter() {
  let i = 0;
  setInterval(() => {
    if (i < text.length) {
      title.textContent += text[i];
      i++;
    } else {
      i = 0;
      title.textContent = "";
    }
  }, 100);
}

generateLetter();

let string = "";
input.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
