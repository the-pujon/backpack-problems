//1. Array Filtering and Mapping
//Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 30, gender: "female" },
  { name: "Jim", age: 35, gender: "male" },
];

const filterOutFemales = (people) => {
  return people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(filterOutFemales(people));
