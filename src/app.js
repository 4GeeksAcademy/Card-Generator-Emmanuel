import "./style.css";

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];

let icons = [
  { key: "♦", color: "red" },
  { key: "♥", color: "red" },
  { key: "♠", color: "black" },
  { key: "♣", color: "black" }
];

let simbolTop = document.querySelector(".simbol");
let simbolBot = document.querySelector(".simbol2");
let cardNumber = document.querySelector(".number");
let button = document.querySelector(".btn");
let card = document.querySelector(".card");
let size = document.querySelector(".size");
let inputt = document.querySelector(".inp");

button.addEventListener("click", generateCard);

function generateCard() {
  ejecutarCodigo();
}

function ejecutarCodigo() {
  let randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  let randomIcon = icons[Math.floor(Math.random() * icons.length)];
  simbolTop.innerHTML = randomIcon.key;
  simbolBot.innerHTML = randomIcon.key;
  simbolTop.style.color = randomIcon.color;
  simbolBot.style.color = randomIcon.color;
  cardNumber.innerHTML = randomNum;
}
setInterval(ejecutarCodigo, 10000);

function saveSize() {
  inputt.addEventListener("change", function() {
    let userInput = inputt.value;
    return userInput;
  });
}

size.addEventListener("click", function saveSize() {
  if (inputt.value < 150) inputt.value = 150;
  card.style.width = inputt.value + "px";
  card.style.height = inputt.value * 1.47 + "px";
});

card.addEventListener("click", function() {
  card.classList.toggle("flipped");
});
