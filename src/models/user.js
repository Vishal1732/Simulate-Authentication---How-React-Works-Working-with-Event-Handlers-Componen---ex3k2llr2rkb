const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Hidden Search</title>
  </head>
  <body>
    <div class="search" id="searchbar">
      <input
        type="text"
        class="input"
        id="search-input"
        placeholder="Search..."
      />
      <button class="btn" id="search-btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <script src="script.js"></script>
  </body>
</html>


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-image: linear-gradient(90deg, #3fa892, #6b53d3);
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}

.search {
    display: flex;
    height: 100px;
    transition: width 0.3s ease;
    width: 100px;
}

.search.active {
    transition: width 0.3s ease;
    width: 400px;
}

.search .input {
    background-color: #fff;
    border: 0;
    font-size: 18px;
    height: 100px;
    transition: width 0.5s ease;
    width: 0;
}

.search.active .input {
    transition: width 0.5s ease;
    display: block;
    padding: 15px;
    flex-grow: 1;
}

.btn {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    font-size: 24px;
    height: 100px;
    width: 100px;
}

.btn:focus,
.input:focus {
    outline: none;
}


=====

import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [name, setName] = useState("_____");
  const [input, setInput] = useState("");
  const handleButtonClick = (e) => {
    setName(input);
  };
  const handleNameChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div id="main">
      <input id="input" onChange={handleNameChange}></input>
      <button id="button" onClick={handleButtonClick}>
        Click
      </button>
      <p id="text"> Hello my name is {name} and I study at Newton School</p>
    </div>
  );
};

export default App;
