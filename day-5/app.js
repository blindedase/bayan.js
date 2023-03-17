// function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('perimeter =', c.perimeter().toFixed(2));


// const circle = {
//     input: function(round) {
//         return `Area: ${Math.PI * round * round} Perimeter: ${2 * Math.PI * round}`;
//     }
// }


// circle.input(number);



// this statement --
// const student = {
//     firstName: "Aldrin John",
//     lastName: "Tamayo",
//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }



// activity day 5 --

// activity 1 -- 
// const square = {
//     input: function(side) {
//         return `Area: ${side * side} Perimeter: ${4 * side}`;
//     }
// }


// const scoring = {
//     player: "leBron",
//     score: 0,
//     madeTheshot(){
//     return `${this.player} just made the shot`;
//     }
// }



var madeTheshot = (function(scoreCount) {
    return function() {
    player = "leBron";
      scoreCount += 1;
      return `${this.player} just made the shot! ${scoreCount} points!`;
    }
  }(0));
  

