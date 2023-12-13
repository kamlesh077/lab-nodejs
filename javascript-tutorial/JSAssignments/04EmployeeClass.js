// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.


class Employee {
    constructor (name, position, salary){
        this.name = name
        this.position = position
        this.salary = salary
    }

    getSalary(){
        return `Employee's salary is :- ${this.salary}`
    }
}

const employee = new Employee("Kamlesh", "UI UX Designer and frontend web developer", 80000)
console.log(employee.getSalary());
console.log(`${employee.name},\n${employee.position},\n${employee.salary}`);


