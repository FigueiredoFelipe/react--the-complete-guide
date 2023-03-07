// ABOUT THE DEVELOPER:
// https://github.com/FigueiredoFelipe;
// https://www.linkedin.com/in/fjnfigueiredo/;

//SPREAD OPERATOR - Used to split up array elements OR object properties
const oldArray = ['a', 'b', 'c']
const newArray = [...oldArray, 1, 2, 3]

const newObject = { ...oldArray, ...newArray, newProp: 1 }


console.log(oldArray);

console.log(`The New Array is: ${newArray}`);

console.log(newObject);

//REST OPERATOR - Used to merge a list of function arguments into an array

function numbers(...args) {
    return args.filter(el => el >= 5)
}

console.log(numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
