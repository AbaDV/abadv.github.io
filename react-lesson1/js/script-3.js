//lesson 1 - ex 3
/*Написать иерархию классов*/

class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name
        this.age = age
        this.dateOfBirth = dateOfBirth
    }

    displayInfo() {
        console.log('[Human] имя: ' + this.name + ', возраст: ' + this.age + ', дата рождения: ' + this.dateOfBirth.toLocaleDateString())
    }
}

class Employee extends Human {
    constructor(human, salary, department) {
        super(human.name, human.age, human.dateOfBirth)
        this.human = human
        this.salary = salary
        this.department = department
    }

    displayInfo() {
        console.log('[Employee] заработная плата: ' + this.salary + ', подразделение: ' + this.department)
        super.displayInfo()
    }
}

class Manager extends Employee {
    constructor(employee) {
        super(employee.human, employee.salary, employee.department)
        this.employee = employee
        this.developers = [
            { name: 'Иван', lastname: 'Иванов' },
            { name: 'Петр', lastname: 'Петров' },
            { name: 'Федор', lastname: 'Федоров' }
        ]
    }
    remove() {
        this.developers.pop()
    }

    add(developer) {
        this.developers.push(developer)
    }

    displayInfo() {
        console.log('[Manager] Мои разработчики: ' + this.developers.length)
        super.displayInfo()
    }
}

class Developer extends Employee {
    constructor(employee) {
        super(employee.human, employee.salary, employee.department)
        this.employee = employee
        this.manager = {};

    }
    setManager(manager) {
        this.manager = manager;
    }
    unsetManager() {
        this.manager = {};
    }
    displayInfo() {
        console.log('[Developer]')
        super.displayInfo()
    }
}

console.log('--- Humans ---');

const human1 = new Human('Василий', 27, new Date(1990, 7, 14))
human1.displayInfo()
const human2 = new Human('Петр', 23, new Date(1990, 7, 10))
human2.displayInfo()
const human3 = new Human('Афоня', 25, new Date(1990, 7, 18))
human3.displayInfo()

console.log('--- Employees -- ');

const employee1 = new Employee(human1, 1000000, "Отдел продаж")
employee1.displayInfo()

const employee2 = new Employee(human2, 2000000, "Отдел маркетинга")
employee2.displayInfo()

console.log('--- Developer -- ');
const developer = new Developer(employee2)
developer.displayInfo()

console.log('--- Manager -- ');
const manager = new Manager(employee1)
manager.add(developer)
manager.displayInfo()
manager.remove()
manager.displayInfo()