import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://playground-a18ce-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
console.log(app)

const userInputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-btn");

addButtonEl.addEventListener("click", () => {
  let inputValue = userInputEl.value;
  console.log(inputValue);
})