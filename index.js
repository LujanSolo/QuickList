import { add } from "./assets/js/functions.js";
console.log(add(2,2));

const appSettings = {
  databaseURL: "https://playground-a18ce-default-rtdb.firebaseio.com/"
}

const userInputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-btn");

addButtonEl.addEventListener("click", () => {
  let inputValue = userInputEl.value;
  console.log(inputValue);
})