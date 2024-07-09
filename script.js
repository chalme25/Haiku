"use strict";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   push,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDTDARgc_sTykOBl_TgG355JjAxZsYdW3I",
//   authDomain: "haiku-67f4c.firebaseapp.com",
//   projectId: "haiku-67f4c",
//   databaseURL: "https://haiku-67f4c-default-rtdb.firebaseio.com/",
//   storageBucket: "haiku-67f4c.appspot.com",
//   messagingSenderId: "604256698303",
//   appId: "1:604256698303:web:e7c4cf415940f76fc56b0a",
// };

// const appSettings = {
//   databaseURL: "https://haiku-67f4c-default-rtdb.firebaseio.com/",
// };

// // Initialize Firebase
// const app = initializeApp(appSettings);
// const database = getDatabase(app);
// const haikusList = ref(database, "Haikus");

// console.log(app);
let inputRowsContainer = document.querySelector(".input-rows");
let poemSpace = document.querySelector(".poem-space");
let container = document.querySelector(".container");
let bambooBox = document.querySelector(".bamboo-box");
let sunflowerBox = document.querySelector(".sunflower-box");
let sunflowerBox2 = document.querySelector(".sunflower-box-2");

class InputField {
  constructor(type, placeholder, maxlength, className) {
    this.placeholder = placeholder;
    this.type = type;
    this.maxlength = maxlength;
    this.className = className;
  }

  render() {
    const inputRow = document.createElement("div");
    inputRow.classList.add("input-row");

    const input = document.createElement("input");
    input.classList.add("inputs");
    this.input = input;

    input.type = this.type;
    input.placeholder = this.placeholder;
    input.setAttribute("maxlength", this.maxlength);
    input.classList.add(this.className);

    inputRow.appendChild(input);

    inputRowsContainer.appendChild(inputRow);
  }
  getValue() {
    return this.input.value.trim();
  }
}

class submitButton {
  constructor(type) {
    this.type = type;
  }

  render() {
    const submitRow = document.createElement("div");
    submitRow.classList.add("submit-row");

    const submit = document.createElement("button");
    submit.classList.add("submit-btn");
    submit.type = this.type;
    submit.innerHTML += "Submit";

    submitRow.appendChild(submit);
    inputRowsContainer.appendChild(submitRow);
  }
}

const messageOneInput = new InputField("text", "5 Syllables", "35", "input1");
const messageTwoInput = new InputField("text", "7 Syllables", "35", "input2");
const messageThreeInput = new InputField("text", "5 Syllables", "35", "input3");
const submitBtnOne = new submitButton("button");
messageOneInput.render();
messageTwoInput.render();
messageThreeInput.render();

submitBtnOne.render();
let submitBtnOneSelected = document.querySelector(".submit-btn");
let allTextFields = document.querySelectorAll(".inputs");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

// let previousPoemSpace = document.querySelector(".previous-poem-space");

const appendPoem = function (poem) {
  const listItem = document.createElement("p");
  listItem.textContent = poem;

  poemSpace.appendChild(listItem);
};

submitBtnOneSelected.addEventListener("click", function (e) {
  e.preventDefault;
  const alertMessage = function () {
    if (input1.value === "" || input2.value === "" || input3.value === "") {
      alert("Please fill all 3 text fields.");
    } else contentLoad();
  };
  alertMessage();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault;
    const alertMessage = function () {
      if (input1.value === "" || input2.value === "" || input3.value === "") {
        alert("Please fill all 3 text fields.");
      } else contentLoad();
    };
    alertMessage();
  }
});

const contentLoad = function () {
  allTextFields.forEach(function (input) {
    let inputValue = input.value;
    console.log(inputValue);

    appendPoem(inputValue);
    poemContentLoad();

    // input.value = "";
    // push(haikusList, inputValue);
    // fetchLatestHaikuFromFirebase();
  });
};

const poemContentLoad = function () {
  poemSpace.classList.remove("hidden");
  poemSpace.style.bottom = "50%";
  poemSpace.classList.add("animate");
  container.classList.add("container-hidden");
  // bambooBox.classList.remove("container-hidden");
  // bambooBox.classList.add("animate-bamboo");
  sunflowerBox.classList.remove("hidden");
  sunflowerBox.classList.add("animate-bamboo");
  // sunflowerBox2.classList.add("animate-sunflower");
  // sunflowerBox2.classList.remove("hidden");
};

// Alert if not all input fields are filled in.
// const alertMessage = function () {
//   if (input1 === "" || input2 === "" || input3 === "") {
//     alert("Fill your shoes.");
//   }
// };

//   for (let i = 0; i < allTextFields.length; i++) {
//     if (
//       allTextFields[0].value === "" ||
//       allTextFields[1].value === "" ||
//       allTextFields[2].value === ""
//     ) {
//       alert("Fill Everything.");
//     }
//   }
// };

// onValue(haikusList, function (snapshot) {
//   console.log(snapshot.val());
// });

// const fetchLatestHaikuFromFirebase = function () {
//   haikusList.orderByKey().limitToLast(1);

//   haikusList.once(haikusList, function (snapshot) {
//     snapshot.forEach(function (childSnapshot) {
//       const haikuText = childSnapshot.val();

//       displayLatestHaiku(haikuText);
//     });
//   });
// };

// const displayLatestHaiku = function (text) {
//   const haikuElement = document.createElement("p");
//   haikuElement.textContent = text;
//   previousPoemSpace.innerHTML = "";
//   previousPoemSpace.appendChild(haikuElement);
// };

// NEXT = Change inkscape gif to just water.
