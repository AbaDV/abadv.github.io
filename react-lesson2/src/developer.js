class Developer {
    constructor(firstName, age) {
        this.firstName = firstName
        this.age = age
    }
    displayInfo() {
        console.log('My name is ' + this.firstName + ', I\'m ' + this.age)
    }
}

exports.Developer = Developer