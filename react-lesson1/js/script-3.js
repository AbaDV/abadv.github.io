//lesson 1 - ex 3
/*Написать иерархию классов*/

class Human {

    constructor(name, age, dateOfBirth) {
        this.name = 'Василий'
        this.age = 27
        this.dateOfBirth = new Date(1990, 7, 14)
    }

    displayInfo() {
        console.log('имя: ' + this.name + ', возраст: ' + this.age + ', дата рождения: ' + this.dateOfBirth.toLocaleDateString())
    }
}

class Employee extends Human {
    constructor(salary, department) {
        super()
        this.salary = 150000
        this.department = 'Управление разработки'
    }

    displayAll() {
        console.log('заработная плата: ' + this.salary + ', подразделение: ' + this.department)
        super.displayInfo()
    }
}

// const human = new Human()
const employee = new Employee()
employee.displayAll()