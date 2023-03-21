// const animes = [
//     {
//         title: "Naruto",
//         score: 98
//     },
//     {
//         title: "Capeta",
//         score: 100
//     },
//     {
//         title: "Hunter x Hunter",
//         score: 95
//     },
//     {
//         title: "Flame of Recca",
//         score: 90
//     }
// ];


// const bestAnime = animes.reduce(
//     (accumulator, currentValue) => {
//         return (accumulator.score > currentValue.score ? accumulator : currentValue);
//     }
// );

// const array1 = [1,2]
// const array2 = [...array1,3,4,5]
    
// console.log(array2);


// Arguments Object
// - Available inside of every functions
// - Array-like object
// - Contains all the arguments passed to the function
// - Not available inside of arrow functions.


// function add(...nums) {
//     let total = 0;
//     for(let n of nums) {
//         total += n;
//     }
//     return total;
// }


// function add(x=5, y=10) {
//     return x + y
// }
