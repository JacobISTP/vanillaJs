const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoUl = document.querySelector("#todos");

let todosArr = [];

const TODOS_KEY = "todosArr";

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todosArr));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todosArr = todosArr.filter(item => item.id !== parseInt(li.id));
    saveTodo();
    li.remove();
}

function addTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeBtn = document.createElement("button");
    li.appendChild(span);
    li.appendChild(removeBtn);
    li.id = newTodo.id;
    span.innerText = newTodo.text;
    removeBtn.innerText = "X";
    removeBtn.addEventListener("click", deleteTodo);
    todoUl.appendChild(li);
}

function handleTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    todosArr.push(newTodoObj);
    addTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodo);

const savedTodo = localStorage.getItem(TODOS_KEY);
console.log(savedTodo);

if (savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    todosArr = parsedTodo;
    parsedTodo.forEach(addTodo);
}