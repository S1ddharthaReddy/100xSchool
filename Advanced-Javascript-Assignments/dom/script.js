
function addTodo(){
    // write the code that reads the contents of the input box
    // create a new todo on the html dom
    // clears the input box
    let element = document.getElementById("todoInput");
    const todo = element.value;

    const newDiv = document.createElement("div");
    newDiv.innerHTML = todo;

    const parentDiv = document.getElementById("todos");
    parentDiv.appendChild(newDiv);
}