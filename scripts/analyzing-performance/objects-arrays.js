let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumber: [1,2,3,4]
};

console.log(Object.keys(instructor));
console.log(Object.entries(instructor));
console.log(instructor.hasOwnProperty("firstName"));

let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// adding push and pop is always faster than shift and unshift
// accessing elements in an array is O(n)
