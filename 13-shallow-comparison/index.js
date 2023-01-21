// ===
// triple equals determines if some things are shlallowed equals or no
// Primitive types (strings, numbers, booleans)
console.log("Hi" === "Hi"); // true

// Complex types (array, object)
console.log({ name: "Joe" } === { name: "Joe" }); // false

const state = {
  favNumber: 42,
  name: "Bob",
  address: {
      street: "123 Main Street",
      city: "Nowhere, PA",
      zip: 12345
  }
};

const state2 = {
  favNumber: 42,
  name: "Bob",
  address: {
      street: "123 Main Street",
      city: "Nowhere, PA",
      zip: 12345
  }
};

console.log(state.favNumber === state2.favNumber); // true: primitive types
console.log(state.name === state2.name); // true: primitive types
console.log(state.address === state2.address) // false: complex types

const person = {
  name: "Sarah",
};

const anotherPerson = person;

console.log(anotherPerson === person); // true: reference to the same complex type

const arr1 = [1, 2, 3, [4]]
const arr2 = [1, 2, 3, [4]]

// this may seem weird, but each indexed element pointed out into a different memomy space
console.log(arr1[3] === arr2[3])
