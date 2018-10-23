//                          PROTOTYPEAL INHERITANCE

// ############################################################################
//
//                         Multi-Object Inheritance (Composition)
//
// ############################################################################

boxer = {
    weight: 88,
    punch: function() {
        console.log("wham");
    }
}

taxman = {
    IQ: 106,
    work: function() {
        console.log("scribble scribble");
    }
}

judy = {};
console.log(judy);

judy_proto = Object.assign({}, taxman);
Object.assign(judy_proto, boxer);
judy.__proto__ = judy_proto;

console.log(judy);

judy.punch();
judy.work();
console.log(judy.IQ);

// ############################################################################
//
//                         Multi-Object Inheritance (Composition)
//
// ############################################################################

// boxer = {
//     weight: 88,
//     punch: function() {
//         console.log("wham");
//     }
// }

// taxman = {
//     IQ: 106,
//     work: function() {
//         console.log("scribble scribble");
//     }
// }

// lawyer = {
//     suit: "fancy",
//     object: function() {
//         console.log("Objection!");
//     }
// }

// john = {};
// judy = {};
// bill = {};

// john_proto = Object.assign({}, taxman);
// Object.assign(john_proto, lawyer);
// john.__proto__ = john_proto;

// judy_proto = Object.assign({}, taxman);
// Object.assign(judy_proto, boxer);
// judy.__proto__ = judy_proto;

// bill_proto = Object.assign({}, lawyer);
// Object.assign(bill_proto, boxer);
// bill.__proto__ = bill_proto;


// bill.punch();
// judy.punch();

// john.work();
// judy.work();

// bill.object();
// john.object();

// console.log(judy.object); // Undefined
// console.log(john.punch); // Undefined
// console.log(bill.work); // Undefined

