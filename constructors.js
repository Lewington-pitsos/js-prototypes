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

// // albert = new Bird(10);
// // console.log(albert.speed);

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

// // // ------------------------------- Prototypes ----------------------------

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

function Bird (speed) {
    this.speed = speed;
}

Bird.prototype.walk = function() {
    console.log("waddle waddle");
};
Bird.prototype.preen = function() {
    console.log("ruffle ruffle");
};

// albert = new Bird(34);

// albert.walk();
// albert.preen();
// console.log(albert.speed);

// ------------------------- Multi Inheritance ----------------------

function Fish(weight) {
    this.weight = weight;
}

Fish.prototype.swim =  function() {
    console.log("sploosh");
}

// terrence = new Fish(8);

// terrence.swim();
// console.log(terrence.weight);

// ------------------------------ Penguin -------------------------

function Penguin(weight, speed) {
    Bird.call(this, speed);
    Fish.call(this, weight);
}

Object.assign(Penguin.prototype, Bird.prototype);
Object.assign(Penguin.prototype, Fish.prototype)

// Penguin.prototype.constructor = Penguin;

harold = new Penguin(33, 9);

harold.walk();
harold.swim();