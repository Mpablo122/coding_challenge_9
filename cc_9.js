//Task 1 Created employee class
class employee{
    constructor(name, id , department, salary){
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    getDetails(){
        return `Employee:${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`
    }
    calculateAnnualSalary(){
        return this.salary * 12;
    }
}

//Expected output is Alice Johnson, 101, sales, 5000
const emp1 = new employee("Alice Johnson", 101, "Sales", 5000);

console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());
//Expected output: 60000
