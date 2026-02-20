
const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming";
newElement.id = "second";

// select element - I want to append it below the h1 element

const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali is coming";

newElement2.id = "third";
// newElement2.className = "diwali";
// newElement2.className += " Holi"
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
// newElement2.classList.remove("diwali");

newElement2.style.backgroundColor = "pink";
newElement2.style.font = "30px";
newElement2.style.color = "blue";

element.before(newElement2);


// console.log(newElement2.getAttribute("id"));

// const list = document.createElement("li");
// list.textContent = "milk";

// const unorderElement = document.getElementById("listing");

// unorderElement.append(list);

// const list2 = document.createElement("li");
// list2.textContent = "cake";

// unorderElement.append(list2);

// const list3 = document.createElement("li");
// list3.textContent = "Halwa";

// unorderElement.prepend(list3);

// const list4 = document.createElement("li");
// list4.textContent = "Paneer";

// // list.after(list4)

// console.log(unorderElement.children);

// unorderElement.children[1].after(list4);


const arr = ["Milk", "Halwa", "Paneer", "tofu", "bread"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.appendChild(list);
}
unorderElement.append(fragment);

// Deleting elements

const s1 = document.getElementById("first");
s1.remove();

// old methods

const month = document.getElementById("ten");

// console.log(month.children);

const lister = document.createElement("li");
lister.textContent = "Help";

month.insertAdjacentElement("afterbegin", lister);

