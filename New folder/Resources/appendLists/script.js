var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var hoursList = document.querySelector("#hourslist");
var todoCountSpan = document.querySelector("#todo-count");

var businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

displayHours();

function displayHours() {
  // Clear todoList element and update todoCountSpan
  hoursList.innerHTML = "";
  todoCountSpan.textContent = businessHours.length;

  // Render a new li for each todo
  for (var i = 0; i < businessHours.length; i++) {
   
    var li = document.createElement("li");
    li.setAttribute("type", "text");
    li.textContent = businessHours[i];
    hoursList.appendChild(li);
  }
}
