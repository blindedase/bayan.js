// const btn = document.querySelector('#btnv2');

// // Will display a text in console
// // btn.onclick = function(){
// //     console.log("You clicked the second button!");
// // }

// function greet() {
//     console.log('Hello, User!');
// }

// btn.onclick = greet;

// document.querySelector('h1').onmouseover = () => {
//     alert('You hovered on h1!');
// }

// element.addEventListener(event, callback);

// const btn = document.querySelector('#btnv2');
// btn.addEventListener("dblclick", () => {
//     alert("You clicked me!");
// })

const btn = document.querySelector('#btnv2');

function test1() {
    console.log("test1");
}

function test2() {
    console.log("test2");
}

// btn.onclick = test2;
// btn.onclick = test1;

btn.addEventListener("click", test1, {once: true});
btn.addEventListener("click", test2);