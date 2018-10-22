// ############################################################################
//
//                              Naive implementation:
//
// ############################################################################

// function Bird (walkingSpeed) {
//     this.walkingSpeed = walkingSpeed;
//     this.walk = function() {
//         console.log("waddle waddle ".repeat(this.walkingSpeed));
//     }
//     this.preen = function() {
//         console.log("ruffle ruffle");
//     }
// }

// albert = new Bird(10);

// albert.walk();
// albert.preen();
// console.log(albert.walkingSpeed);

// // --------------------------------- Prototypes ------------------------------

// console.log(Bird.prototype);

// Bird.prototype.height = 6;
// console.log(Bird.prototype);

// malbert = new Bird(77);
// console.log(malbert.__proto__);
// console.log(malbert.height);

// Bird.prototype.height = 8;
// console.log(malbert.height);

// Bird.prototype.height = undefined;

// ############################################################################
//
//                              Better implementation
//
// ############################################################################

function Bird (walkingSpeed) {
    this.walkingSpeed = walkingSpeed;
}

Bird.prototype.walk = function() {
    console.log("waddle waddle ".repeat(this.walkingSpeed));
}
Bird.prototype.preen = function() {
    console.log("ruffle ruffle");
}

albert = new Bird(34);

albert.walk();
albert.preen();
console.log(albert.walkingSpeed);


// ############################################################################
//
//                              Constructor Inheritance
//
// ############################################################################


function Penguin (maximumDepth) {
    this.maximumDepth = maximumDepth;
}

Penguin.prototype = Object.create(Bird.prototype);

Penguin.prototype.swim = function() {
    console.log("sploosh ".repeat(this.maximumDepth));
}

kowalski = new Penguin(7);

kowalski.preen();
kowalski.swim();

// --------------------------------- Constructors ------------------------------

console.log(kowalski.constructor)