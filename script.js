var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var hoursList = document.querySelector("#hourslist");
var todoCountSpan = document.querySelector("#todo-count");

var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

displayHours();

function displayHours() {
  // Clear todoList element and update todoCountSpan
  hoursList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}
