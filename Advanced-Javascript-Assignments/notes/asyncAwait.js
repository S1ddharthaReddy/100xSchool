

// async await

// async function greet(){
//     // return "100xDevs";
//     return new Promise((resolve, reject)=>{
//         resolve("100xDevs");
//     })
// }

// const response = greet();
// // console.log(response); //Promise { '100xDevs' }

// response.then((data)=>console.log(data))
// // .catch((error)=>{
// //     console.log("Error: ", error);
// // })



// fetch("https://api.github.com/users")
// .then((response)=> response.json())
// .then((data)=>console.log(data));



async function github(){
    console.log("Hello world");
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    // console.log(data);

    const parent = document.getElementById("first");

    for(let user of data){
        const element = document.createElement("div");
        element.classList.add("user");

        const image = document.createElement("img");
        image.src = user.avatar_url;

        const userName = document.createElement("h2");
        userName.textContent = user.login;

        const anchor = document.createElement("a");
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile";

        element.append(image, userName, anchor);
        parent.append(element);
    }
}

github();

// console.log("I am here");
