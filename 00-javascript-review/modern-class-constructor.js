// ABOUT THE DEVELOPER:
// https://github.com/FigueiredoFelipe;
// https://www.linkedin.com/in/fjnfigueiredo/;

class Human {
    // constructor() {
    //     this.gender = 'male'
    // }
    gender = 'male'

    // printGender() {
    //     console.log(this.gender);
    // }

    printGender = () => console.log(this.gender)
}


class Person extends Human {
    name = 'Max'

    printMyName = () => console.log(this.name);
}

const person = new Person()
person.printMyName()
person.printGender()