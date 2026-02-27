
const form = document.querySelector('form');

const allTask = document.querySelector('#allTask');

const input = document.querySelector('input');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const text = input.value.trim();

    if(text == "") return;

    const parent = document.createElement('div');

    const task = document.createElement('span');
    task.textContent = text;
    task.style.marginRight = "20px";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.style.width = "80px";
    deleteButton.style.height = "40px";
    deleteButton.style.padding = "5px";
    deleteButton.style.fontSize = "20px";

    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";
    doneButton.style.width = "80px";
    doneButton.style.height = "40px";
    doneButton.style.padding = "5px";
    doneButton.style.fontSize = "20px";

    doneButton.style.marginRight = "10px";

    parent.append(task, doneButton, deleteButton);

    allTask.append(parent);

    deleteButton.addEventListener('click', ()=>{
        parent.remove();
    })

    doneButton.addEventListener('click', ()=>{
        task.style.textDecoration = "line-through"
        task.style.color = "grey";
    })
})