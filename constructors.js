//                              CONSTRUCTOR METHODS

// ############################################################################
//
//                              Simple implementation:
//
// ############################################################################

// function Bird (speed) {
//     this.speed = speed;
// }

// gilbert = Bird(23)
// console.log(gilbert)

// albert = new Bird(10);
// console.log(albert.speed);

// ############################################################################
//
//                              Naive implementation:
//
// ############################################################################

// Bird = function(speed) {
//     this.speed = speed;
//     this.walk = function() {
//         console.log("waddle waddle");
//     }
//     this.preen = function() {
//         console.log("ruffle ruffle");
//     }
// }

// walbert = new Bird(13);

// walbert.walk();
// walbert.preen();
// console.log(walbert.speed);

// // ------------------------------- Prototypes ----------------------------

// console.log(Bird.prototype);

// Bird.prototype.height = 6;
// console.log(Bird.prototype);

// malbert = new Bird(77);
// console.log(malbert.__proto__);
// console.log(malbert.height);

// Bird.prototype.height = 8;
// console.log(malbert.height);

// ############################################################################
//
//                              Better implementation
//
// ############################################################################

// function Bird (speed) {
//     this.speed = speed;
// }

// Bird.prototype.walk = function() {
//     console.log("waddle waddle");
// };
// Bird.prototype.preen = function() {
//     console.log("ruffle ruffle");
// };

// albert = new Bird(34);

// albert.walk();
// albert.preen();
// console.log(albert.speed);

// // ------------------------- Multi Inheritance ----------------------

// boxer = {
//     weight: 88,
//     punch: function() {
//         console.log("wham");
//     }
// }

// lawyer = {
//     suit: "fancy",
//     object: function() {
//         console.log("Objection!");
//     }
// }

// Object.assign(Bird.prototype, lawyer);
// Object.assign(Bird.prototype, boxer);

// albert.punch();
// albert.object();
// albert.preen();
// console.log(albert.suit);

// ############################################################################
//
//                              Constructor Inheritance
//
// ############################################################################

// function Penguin (speed, maxDepth) {
//     Bird.call(this, speed)
//     this.maxDepth = maxDepth;
// }

// Penguin.prototype = Object.create(Bird.prototype);

// Penguin.prototype.swim = function() {
//     console.log("sploosh");
// };

// kowalski = new Penguin(7, 4);

// kowalski.preen();
// kowalski.swim();
// kowalski.walk();

// // --------------------------------- Constructors ------------------------------

// // console.log(kowalski.constructor)
// // Penguin.prototype.constructor = Penguin;
// // console.log(kowalski.constructor)

// ############################################################################
//
//                                  Final Form
//
// ############################################################################

// function Bird (speed) {
//     this.speed = speed;
// }

// Bird.prototype.walk = function() {
//     console.log("waddle waddle");
// };
// Bird.prototype.preen = function() {
//     console.log("ruffle ruffle");
// };


// function Penguin (weight, maxDepth) {
//     Bird.call(this, weight)
//     this.maxDepth = maxDepth;
// }

// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// Penguin.prototype.swim = function() {
//     console.log("sploosh");
// };
