
// console.log("Hello world start");


// code
// promise: object - > 3 states: pending, fulfilled, rejected

// const p1 = fetch("https://api.github.com/users")
// // console.log(p1); // output Promise {<pending>}

// const p2 = p1.then((response)=>{
//     return response.json()
// })

// p2.then((response)=>{
//     console.log(response)
// })

// fetch("https://api.github.com/users")
// .then((response)=>{

//     if(!response.ok){
//         throw new Error("Data is not present in server")
//     }

//     return response.json();
// })
// .then((data)=>{
//     const parent = document.getElementById("first");

//     for(let i = 0;i<data.length;i++){
        
//         const image = document.createElement('img');
//         image.src = data[i].avatar_url;
//         image.style.height = "40px";
//         image.style.width = "40px";
//         parent.append(image);
//     } 
// })
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// })





// console.log("Hello world end");

/* 
  json - cannot write  undefined, function, 
  it is string format, univeral understand by all languages (c, cpp, java)

*/

// const j1 = {
//     name: "Rooo",
//     age: 20,
//     address: "delhi"
// }

// const jsonFormat = JSON.stringify(j1);

// console.log(jsonFormat);

// const realJsonFormat = `{
//     "name":"Rohit",
//     "age": 30,
//     "address": "delhi"
// }`;

// const JsObject = JSON.parse(realJsonFormat);
// console.log(JsObject);


// creating a promise

const p1 = new Promise((resolve, reject)=>{
    resolve({
        name:"Rohit",
        age:30
    })
})

p1.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})