let carMakes = ["Ford", "Chevy", "Toyota", "Honda", "Tesla"];
console.log("original list:", carMakes);

// add a new car make to the end of the list
carMakes.push("mercedes benz");
console.log("new list after push:", carMakes);

// remove the last item from the list
carMakes.pop();
console.log("new list after pop:", carMakes);

// add a new car make to the beginning of the list
carMakes.unshift("Audi");
console.log("new list after unshift:", carMakes);

// remove the first item from the list
carMakes.shift();
console.log("new list after shift:", carMakes);

// find the index of a car make in the list
let indexOfHonda = carMakes.indexOf("Honda");
console.log("index of Honda:", indexOfHonda);

// add "Nissan" to the 3rd position in the list
carMakes.splice(2, 0, "Nissan");
console.log("new list after splice:", carMakes);

// does the list include "Ford"? TRUE / FALSE
let includesFord = carMakes.includes("Ford");
console.log("includes Ford:", includesFord);

let someValue = "Ford"

if (carMakes.includes(someValue)) {
    console.log(`${someValue} is in the list`);
} else {
    console.log(`${someValue} is not in the list`);
}

// forEach example
carMakes.forEach((make) => {
    switch (make) {
        case 'Ford':
            console.log(`${make} is an American brand.`);
            break;
        case 'Chevy':
            console.log(`${make} is an American brand that rocks.`);
            break;
        case 'Toyota':
            console.log(`${make} is a Japanese brand that is reliable.`);
            break;
        case 'Honda':
            console.log(`${make} is a Japanese brand that is reliable.`);
            break;
        case 'Tesla':
            console.log(`${make} is a Elon Musk brand that is experimental.`);
            break;
        case 'Nissan':
            console.log(`${make} is a Japanese brand that is reliable.`);
            break;
        case 'Audi':
            console.log(`${make} is a German brand that is reliable.`);
            break;
        case 'Mercedes Benz':
            console.log(`${make} is a German brand that is reliable.`);
            break;
        default:
            console.log(`${make} is not in the list.`);
            break;
    }
});

// map example
let carMakesUpperCase = carMakes.map((make) => {
    return make.toUpperCase();
})
console.log("carMakes:", carMakes);

console.log("carMakesUpperCase:", carMakesUpperCase);

// map and forEach together example
let carModels = carMakes.map((make) => {
    let models = [];

    // use a forEach inside the map
    ["Model A", "Model B", "Model C"].forEach((model) => {
        models.push(`${make} ${model}`);
    });

    return models;
})

console.log("carModels:", carModels);