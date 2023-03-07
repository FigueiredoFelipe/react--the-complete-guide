// Exercise: Array Methods
// Your task is to:
// 1) add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.

// For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].

// const mappedNumbers = filteredNumbers.map(val => ({num: val}));



// function transformToObjects() {
//     const numbers = [1, 2, 3]
//     const mappedNumbers = numbers.map(val => ({ num: val }));
//     console.log(mappedNumbers);
//     return mappedNumbers
// }




// function transformToObjects() {
//     const numbers = [1, 2, 3]
//     const mappedNumbers = numbers.map(num => ({ val: num }));
//     console.log(mappedNumbers);
//     return mappedNumbers
// }

// transformToObjects()



// function transformToObjects() {
//     const numbers = [1, 2, 3]
//     const mappedNumbers = numbers.map(num => ({ val: num }));
//     return mappedNumbers
// }

// const test = transformToObjects()

// console.log(test[2]);



const numbers = [1, 2, 3]

function transformToObjects(numberArray) {
    const mappedNumbers = numberArray.map(num => ({ val: num }));
    return mappedNumbers
}

console.log(transformToObjects(numbers));


