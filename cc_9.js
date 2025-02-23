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

class manager extends employee{
    constructor (name, id, department, salary,teamSize){
       super(name,id,department,salary);
       this.teamSize = teamSize;

    }
    getDetails(){
        return `Manager: ${this.name}, ID: ${this.id},Department: ${this.department}, Salary: $${this.salary}`
    }
    calculateBonus(){
        return this.salary * 12 *0.1;
    }
    calculateAnnualSalary(){
        return super.calculateAnnualSalary() + this.calculateBonus();
    }
}
const mgr1 = new manager("John Smith", 201, "IT", 8000,5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

//Task 3 Created company class
class company{
    constructor(name){
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee);

    }
    listEmployees(){
        this.employees.forEach(emp => console.log(emp.getDetails()));

    }

    calculateTotalPayroll(){
        let totalPayroll = 0;
        this.employees.forEach(emp =>{
            totalPayroll += emp.calculateAnnualSalary();
        });
        return totalPayroll
    }
    promotetoManager(employee,Teamsixe){
        const newManager = new manager(employee.name,employee.id, employee.department,employee.salary, teamSize);
        const employeeIndex = this.employees.indexOf(employee);
        if (employeeIndex > -1){
            this.employees.splice(employeeIndex,1);
        }
        this.employees.push(newManager);
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
//Task 5 implemented promotion system.
console.log("After promotion:");
compania.listEmployees();
