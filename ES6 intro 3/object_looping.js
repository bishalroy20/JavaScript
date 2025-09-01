//9 object looping

const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    department: 'Development',
    salary : 34000
};


for (const key in employee){
    console.log(employee[key]);
}