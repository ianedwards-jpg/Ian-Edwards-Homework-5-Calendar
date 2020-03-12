var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var hoursList = document.querySelector("#hourslist");
var todoCountSpan = document.querySelector("#todo-count");

var businessHours = ["9AM:", "10AM:", "11AM:", "12PM:", "1PM:", "2PM:", "3PM:", "4PM:", "5PM:"];

displayHours();

function displayHours() {
  // Clear todoList element and update todoCountSpan
  hoursList.innerHTML = "";
  todoCountSpan.textContent = businessHours.length;

  // Render a new li for each todo
  for (var i = 0; i < businessHours.length; i++) {

    var row = document.createElement("row")
    hoursList.appendChild(row);
   
    var li = document.createElement("li");
    //li.setAttribute("type", "text");
    li.className += "col-2"
    li.textContent = businessHours[i];
    row.appendChild(li);

    var inp = document.createElement("input")
    inp.setAttribute("type", "text");
    inp.className += "col-10"
    row.appendChild(inp)
  }
}
