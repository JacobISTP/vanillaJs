const usernameForm = document.querySelector("#username");
const usernameInput = document.querySelector("#username input");
const userWelcome = document.querySelector("#welcome");
const userWelcomeSpan = document.querySelector("#welcome span");
const logoutBtn = document.querySelector("#welcome button");
const todo = document.querySelector("#todo");

const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function welcome(event) {
    event.preventDefault();
    const username = usernameInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    usernameForm.classList.add(HIDDEN_KEY);
    paintWelcome(username);
}

function paintWelcome(username) {
    userWelcomeSpan.innerText = `안녕하세요. ${username}님`;
    userWelcome.classList.remove(HIDDEN_KEY);
    todo.classList.remove(HIDDEN_KEY);
}

function logout() {
    localStorage.clear();
    location.reload();
    usernameForm.classList.remove(HIDDEN_KEY);
    userWelcome.classList.add(HIDDEN_KEY);
    todo.classList.add(HIDDEN_KEY);
    usernameInput.value = "";
}

if (savedUsername === null) {
    usernameForm.classList.remove(HIDDEN_KEY);
    usernameForm.addEventListener("submit", welcome);
} else {
    paintWelcome(savedUsername);
}

logoutBtn.addEventListener("click", logout)