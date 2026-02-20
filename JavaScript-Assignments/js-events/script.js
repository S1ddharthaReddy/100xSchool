
// Events: mouse move, keys pressed, click, double click
// Event Listner: Listening the event
// Event Action: Strike is coming

// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is Coming";
// }

// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     // element.textContent = "Strike is Coming";
//     element.style.backgroundColor = "blue";
// }

// // this will override the above one, i want both to run
// element.onclick = function handleClick(){
//     element.textContent = "I am the best";
// }

// ------------------------is the best method----------------------
// element.addEventListener('dblclick', ()=>{
//     element.textContent = "Strike is coming";
// })

// element.addEventListener('click', ()=>{
//     element.style.backgroundColor = "blue";
// })

// element.addEventListener('mouseenter', ()=>{
//     element.textContent = "Hover one";
// })


// const child1 = document.getElementById("child1");
// child1.addEventListener("click", ()=>{
//     child1.textContent = "I am clicked";
// })

const parent = document.getElementById("parent");
// console.log(parent.children);

// parent.addEventListener("click", (e)=>{
//     e.target.textContent = "I am Clicked";
// })

parent.addEventListener("click", handleClick);

function handleClick(e){
    e.target.textContent = "I am Clicked";
    parent.removeEventListener("click", handleClick);
}

// parent.removeEventListener("click", handleClick);

// for(let child of parent.children){
//     child.addEventListener("click", ()=>{
//         child.textContent = "I am clicked";
//     })
// }


// EVENT BUBBLING AND EVENT CAPTURING

// 1. Capture phase  2. Event phase  3. Target phase

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener("click", (e)=>{
//     console.log(e.target);
//     // console.log("Grandparent Clicked");
// }, false)

// const parent = document.getElementById("parent");
// parent.addEventListener("click", (e)=>{
//     console.log(e);
//     console.log("Parent Clicked");
// }, false)

// const child = document.getElementById("child");
// child.addEventListener("click", (e)=>{
//     console.log(e);
//     e.stopPropagation();
//     console.log("Child Clicked");
// }, false)

// e -> event listener object, it has lots of information

// true/false -> 
// capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// capture phase off hai: Event hai usko down to up(Bubbling phase bolte hai) tab trigger kiya jayegaa