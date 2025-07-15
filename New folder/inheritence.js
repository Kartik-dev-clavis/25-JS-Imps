// * Inheritence Javscript - Inheritance in JavaScript means one object can access
// * properties and methods of another object through the prototype chain or class-based syntax.
/**
 * JavaScript uses prototypes for inheritance.
 * When you try to access a property or method on an object and it doesn't exist on it, 
 * JavaScript looks up the chain (called the prototype chain) to find it.
*/
// -----------------------------------------
// Inheritance using pure objects with Object.create
const parent = {
  greet() {
    console.log("Hello from parent!");
  }
};

const child = Object.create(parent);
child.name = "Child";

child.greet(); // → "Hello from parent!"
// Even though child doesn’t have a greet method, it inherits it from parent.

//! EXAMPLE WITH CLASSES JS

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Inherited from Animal
d.bark();  // Own method

// What we can also do is if we created a constructor function and we put somehting to an object it will work due
// to inheritance
function Person (){
    this.talk = function (){
        return "Talking"
    }
}
// and then we do 
const me4 = new Person()
me4.talk(); // Still works and prints "Talking"

// ? But

function Person2 (){
    this.age = 12 ;
}
const me2 = new Person2()
me2.age // prints 12
Person2.prototype.age // prints undefined 

/**
 * me2.age returns 12 because it was assigned directly to the instance inside the constructor.
Person.prototype.age returns undefined because we never set it on the prototype.
 */



// -----------------------------------------
// Inheritance using a Constructor Function
function Person() {};
Person.prototype.talk = function () {
  return 'Talking';
}

const me3 = new Person();
const you3 = new Person();
me3.talk(); // Talking
you3.talk(); // Talking

// -----------------------------------------
// Inheritance using pure objects with Object.setPrototypeOf
const person1 = {}
person.__proto__.talk = function (){
  return 'Talking';
}
const me5 = {};
Object.setPrototypeOf(me5, person1);
me5.talk(); // Talking
 