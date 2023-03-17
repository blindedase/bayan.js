//FOR LOOP
// for (let i = 5; i <= 5; i++) {
//     console.log(i);
// }

// This will print even numbers
// for(let i = 0; i <= 20; i+=2) {
//     console.log(i);
// }

// // Print odd numbers
// for(let i = 1; i <= 20; i+=2) {
//     console.log(i);
// }

// Print 100, 90, 80, ...0
// for(let i = 100; i >= 0; i-=10) {
//     console.log(i);
// }

// Infinite Loop
// for(let i = 20; i >= 0; i++) {
//     console.log("Infinite Loop", i);
//     if(i === 25) {
//         break;
//     }
// }

// Loop over an JS Array
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// for(let i = 0; i <= days.length - 1; i++) {
//     console.log(i, days[i]); // 0,Sunday
// }

// console.log("==============");

// for(let i = days.length -1; i >= 0; i--) {
//     console.log(i, days[i].toUpperCase());
// }

// Nested For Loop
// for(let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for(let j = 1; j <= 4; j++) {
//         console.log(`       j is: ${j}`);
//     }
// }

// const seatPlan = [
//     ["Student1", "Student2", "Student3"],
//     ["Student4", "Student5", "Student6"],
//     ["Student7", "Student8", "Student9"]
// ];

// console.log(seatPlan.length);

// for(let i = 0; i < seatPlan.length; i++) {
//     const row = seatPlan[i];
//     console.log(`ROW ${i + 1}`);
//     for(let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// WHILE LOOP
// let num = 0;

// while(num <= 10) {
//     num++;
//     console.log(num);
// }

// const userPass = "Pass12345";
// let countXPass = 0;

// let inputPass = prompt("Please enter the correct password!");

// while(inputPass != userPass) {
//     inputPass = prompt("Invalid Password! Please re-enter your password!");
//     countXPass++;
//     if()
// }

// console.log("Thank you for providing the correct password!");

// let input = prompt("What would you like to say.");

// while(true) {
//     input = prompt(`You said ${input}`);
//     if(input === "quit") {
//         break;
//     }
// }

// alert("Quiting...");

// for(let i = 0; i <= 1000000; i++) {
//     console.log(i);
//     // if(i === 10) {
//     //     break;
//     // }
// }

// FOR...OF LOOP
// for(variable of iterable) {
//     Statement
// }

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// // For Loop
// console.log("========FOR LOOP==========");
// for(let i = 0; i <= days.length - 1; i++) {
//     console.log(i, days[i]); // 0,Sunday
// }

// console.log("========WHILE LOOP==========");
// // While Loop
// let num = 0;
// while(num < days.length) {
//     console.log(num, days[num]);
//     num++;
// }

// console.log("========FOR...OF LOOP==========");
// // For...Of Loop
// for(let day of days) {
//     console.log(day);
// }

// const seatPlan = [
//     ["Student1", "Student2", "Student3"],
//     ["Student4", "Student5", "Student6"],
//     ["Student7", "Student8", "Student9"]
// ];

// for(let seat of seatPlan) {
//     console.log(seat);
//     for(let student of seat) {
//         console.log(student);
//     }
// }

// for(let char of "Hello") {
//     console.log(char);
// }

//FOR...IN Loop
// const studentsGrade = {
//     student1: 99,
//     student2: 98,
//     student3: 94,
//     student4: 90,
//     student5: 75
// };

// for(let student in studentsGrade) {
//     console.log(`${student} got ${studentsGrade[student]}`);
// }


// Todo List Program

let userInput = prompt("Enter a command:");
const todos = [];

while(userInput.toLowerCase() != "quit") {
    if(userInput === "List") {
        console.log("**********");
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    } else if(userInput === "New") {
        const newTodo = prompt("Enter your new todo item:");
        console.log(`${newTodo} has been added to your Todo List.`);
        todos.push(newTodo);
    } else if(userInput === "Delete") {
        const removeTodo = prompt("Enter the item's index you want to be deleted.");
        console.log(`${todos[removeTodo]} has been deleted`);
        todos.splice(removeTodo, 1);
    }
    userInput = prompt("Enter a command:");
}

console.log("Quitting...");
console.log("App has been closed!");