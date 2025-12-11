import { displayTodos } from "./displayTodos.js";

let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    alert("Please login first!");
    window.location.href = "login.html";
}

async function fetchTodos() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await res.json();
        displayTodos(data.slice(0, 20)); // show only 20
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

fetchTodos();
