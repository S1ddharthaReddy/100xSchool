// Todo application

let todoIndex = 1;

function addTodo(){
    // write the code that reads the contents of the input box
    // create a new todo on the html dom
        // step 1 - create a new div in js (as a variable)
        // step 2 - insert that div element to a parent div
    // clears the input box

    let element = document.getElementById("todoInput");
    const todo = element.value;
    element.value = "";

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "todo" + todoIndex);
    // newDiv.innerHTML = "<div>" + todo + "<button> delete </button>";

    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = todo;

    const todoButton = document.createElement("button");
    todoButton.innerHTML = "Delete todo";
    todoButton.setAttribute("onclick", "deleteTodo(" + todoIndex + ")");

    newDiv.appendChild(todoSpan);
    newDiv.appendChild(todoButton);

    const parentDiv = document.getElementById("todos");
    parentDiv.appendChild(newDiv);
    todoIndex++;
}

function deleteTodo(index){
    // alert("Delete todo is called " + index);
    const divElement = document.getElementById("todo" + index);
    document.getElementById("todos").removeChild(divElement);
}