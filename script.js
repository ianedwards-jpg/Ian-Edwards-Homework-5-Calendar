var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var container = document.querySelector("#container");

var businessHours = [" 9AM:", "10AM:", "11AM:", "12PM:", " 1PM:", " 2PM:", " 3PM:", " 4PM:", " 5PM:"];

displayHours();

function displayHours() {
  // Document
  // Clear todoList element and update todoCountSpan
  container.innerHTML = "";

  // Render a new li for each todo
  for (var i = 0; i < businessHours.length; i++) {

    //new row div
    var row = document.createElement("div")
    row.className+= "row"
    container.appendChild(row);


   //Hour Div (2 Columns)
    var timeShow = document.createElement("div");
    timeShow.className += "col-2"
    timeShow.textContent = businessHours[i];
    row.appendChild(timeShow);


    //Hour Div (10 Columns)
    var inDiv = document.createElement("div");
    inDiv.className += "col-10"
    inDiv.value = inp;
    row.appendChild(inDiv);


    //Text Input Box Div
    var inp = document.createElement("input")
    inp.setAttribute("type", "text");
    inp.className += "input"
    row.appendChild(inp)

    var saveBtn= document.createElement("button")
    saveBtn.className += "btn btn-default saveBtn"
    row.appendChild(saveBtn)
  }
}

