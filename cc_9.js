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

//Task 2 Created manager class with inheritance

class manager {
    constructor (name, id, department, salary,teamSize){
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
        this.teamSize = teamSize;

    }
    getDetails(){
        return `Manager: ${this.name}, ID: ${this.id},Department: ${this.department}, Salary: $${this.salary}`
    }
    calculateBonus(){
        return this.salary * 12 *0.1;
    }
}
const mgr1 = new manager("John Smith", 201, "IT", 8000,5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

//Task 3 Created company class
class company{
    constructor(name){
        this.name
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee);

    }
    listEmployees(){
        this.employees.forEach(emp => console.log(emp.getDetails()));

    }
}

const compania = new company("TechCorp")

const emp12 = new employee("Alice Johnson", 101, "Sales", 5000);
const mgr12 = new manager("John Smith", 201, "IT", 8000, 5);

compania.addEmployee(emp12);
compania.addEmployee(mgr12);
compania.listEmployees();

//Task 4 implemented Payroll system 

console.log("Total Payroll: $" + compania.calculateTotalPayroll()); 