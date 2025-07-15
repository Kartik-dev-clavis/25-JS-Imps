/**
 * ✅ When you try to access a property on an object and it's not found,
 * JavaScript looks up the prototype chain until it finds it or reaches null.
 * 
 * 🔁 This behavior is what enables inheritance in JavaScript.
 *
 * 💡 Here's where PROTOTYPE vs __PROTO__ comes into play.
 */ 
 
/**
 * 🔹 __proto__
 * - It is an internal (but accessible) property of **every object**.
 * - It points to the prototype object it inherits from (i.e., the parent object in the chain).
 * - Used for prototype chain lookup.
 */
 function Dude(val){
    this.name = val
 }
 const obj = new Dude("kartikey");
 obj.prototype // undefined
 obj.__proto__ // {}
 console.log(obj.__proto__ === Object.prototype); // true

 //? why since because both will have {constructor: f} 
 

/**
 * 🔹 prototype
 * - It is a property of **constructor functions** (including class constructors).
 * - It's the blueprint object used to build `__proto__` for instances.
 * - You can add shared methods or properties to it, which all instances will inherit.
 */
 
 function Person(name) {
    this.name = name;
 }
 
 Person.prototype.sayHi = function() {
   console.log(`Hi, I'm ${this.name}`);
 };
 
 const p = new Person('Kartikey');
 p.sayHi(); // Hi, I'm Kartikey
 console.log(p.__proto__ === Person.prototype); // true
 

/**
 * ✅ Summary:
 * - `__proto__`: Belongs to the instance, points to the constructor's `.prototype`.
 * - `prototype`: Belongs to constructor functions, used to define properties/methods to be inherited.
 */
