//4. Sorting Objects
//Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Camaro", year: 2019 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));
// Output: [{ make: "Chevrolet", model: "Camaro", year: 2019 }, { make: "Toyota", model: "Corolla", year: 2020 }, { make: "Ford", model: "Mustang", year: 2021 }]
