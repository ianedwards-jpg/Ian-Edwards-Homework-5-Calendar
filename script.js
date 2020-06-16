var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var container = document.querySelector("#container");
var inputBox = document.querySelector("#input");
var saveBtn = document.querySelector("#saveBtn");

var businessHours = ["9AM:", "10AM:", "11AM:", "12PM:", "1PM:", "2PM:", "3PM:", "4PM:", "5PM:"];
var saveText = "Save";
var e = 1;
var events = new Array(); //do i need to reference "i" here? 

// Container Document Render 
displayHours();
// renderLastRegistered();

function displayHours() {

  // Clear todoList element and update todoCountSpan
  container.innerHTML = "";

  // Render a new li for each todo
  for (var i = 0; i < businessHours.length; i++) {




    //new row div
    var row = document.createElement("div")
    row.className += "row"
    container.appendChild(row);

    //Hour Div (2 Columns)
    var timeShow = document.createElement("div");
    timeShow.className += "col-1 timeShow"
    timeShow.textContent = businessHours[i];
    row.appendChild(timeShow);


    //Task Div (10 Columns)
    var inDiv = document.createElement("div");
    inDiv.className += "col-10"
    inDiv.value = inp;
    row.appendChild(inDiv);


    //Text Input Box Div
    var inp = document.createElement("input")
    inp.setAttribute("type", "text");
    inp.setAttribute("id", "input" + i);
    inp.className += "input"
    // inp.textContent = events[i]
    inDiv.appendChild(inp)

    //Hour Div (10 Columns)
    var btnDiv = document.createElement("div");
    btnDiv.className += "col-1"
    row.appendChild(btnDiv);

    var saveBtn = document.createElement("button")
    saveBtn.className += "btn saveBtn"
    saveBtn.setAttribute("id", "saveBtn");
    saveBtn.textContent = saveText;
    btnDiv.appendChild(saveBtn)
    //ID is setting correctly. 
    /////////////////////////////////////////////////
    // var saveBtn = document.querySelector("#saveBtn");
    saveBtn.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(event)

      for (var i = 0; i < businessHours.length; i++) {
        console.log("#input" + i);
        var textBox = document.querySelector("#input" + i).value;
        localStorage.setItem("input" + i, textBox);
      }
    });

  }
  renderLastRegistered();
}

function renderLastRegistered() {
  var inputBox = document.querySelector("#input");

  for (var i = 0; i < businessHours.length; i++) {

    var inputBox = localStorage.getItem("input" + i);
    var textNull = "Enter a task and hit Save!"
    if (inputBox === "") {
      // inputBox.textContent = textnull
      inputBox.innerHTML = textNull
      localStorage.setItem("input" + i, inputBox);
      //   } else {
      //   inputBox.innerHTML = textBox;
      // }
    }
  }
}

// saveBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(event)

//   for (var i = 0; i < businessHours.length; i++) {

//     var textBox = document.querySelector("input" + i).value;
//     localStorage.setItem("input" + i, textBox);
//   }
// })
