//8 Entries

const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    department: 'Development',
    salary : 34000
};

const keys = Object.keys(employee)
// console.log(keys)
const val = Object.values(employee)
// console.log(val)

const entries = Object.entries(employee);
// console.log(entries);
// Output: [['name', 'John Doe'], ['age', 30], ['position', 'Software Engineer'], ['department', 'Development']]



// example 2----------------

// freeze : kono modification kora jabe na notun o add kora jabe na , delete o jabe na
Object.freeze(employee);
//seal : modify jabe delete kora jabe na
Object.seal(employee)


delete employee.age // delete hoye jabe
employee.salary = employee.salary + 1000
console.log(employee)