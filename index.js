import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://playground-a18ce-default-rtdb.firebaseio.com/",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const infoInDB = ref(database, "info");
const userInputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-btn");
let listField = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", () => {
  let inputValue = userInputEl.value;
  push(infoInDB, inputValue);
  console.log(`${inputValue} added to the database`);
  createListField(inputValue);
  clearInputField();
});

function createListField(inherentValue) {
  listField.innerHTML += `<li>${inherentValue}</li>`;
};
function clearInputField() {
  userInputEl.value = "";
};