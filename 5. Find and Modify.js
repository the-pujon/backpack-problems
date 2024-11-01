//5. Find and Modify
//Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];

const findAndModify = (people, name, age) => {
  return people.map((person) =>
    person.name === name ? { ...person, age } : person
  );
};

console.log(findAndModify(people, "Jane", 31));
// Output: [{ name: "John", age: 25 }, { name: "Jane", age: 31 }]
