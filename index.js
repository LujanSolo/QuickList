// import firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// database setup
const appSettings = {
  databaseURL: "https://playground-a18ce-default-rtdb.firebaseio.com/",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shopListinDB = ref(database, "info");

// pull in elements from html
const userInputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-btn");
let listField = document.getElementById("shopping-list");

onValue(shopListinDB, function (snapshot) {
  let shopListArray = Object.values(snapshot.val());
  clearListField();
  for (let i=0; i < shopListArray.length; i++){
    createListField(shopListArray[i]);
  }
  console.log(shopListArray)
})

// event listener on "Add Item" click
addButtonEl.addEventListener("click", () => {
  let inputValue = userInputEl.value;
  push(shopListinDB, inputValue);
  clearInputField();
});

// function to add list item to ul
function createListField(inherentValue) {
  listField.innerHTML += `<li>${inherentValue}</li>`;
}

function clearListField() {
  listField.innerHTML = "";
}

// function to clear Input Field upon button click
function clearInputField() {
  userInputEl.value = "";
}
