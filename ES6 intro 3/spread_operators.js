// 6 spread operators 


const numbers = [5,9,6,9,3,2,5,1];
// console.log(numbers)
// console.log(...numbers)

// console.log(Math.max(...numbers))


const first = [5,8,9,6,3]
// const second = first // jodi second e change kori first e o change hobe
const second = [...first]  //second change korle first no change

second.push(0);
const third = [0,2,5, ...first , 9 ,3 ,2 , ...second]

// console.log(second)
// console.log(first)

const person = {name : 'abc' , age : 25}
const emp = { ...person , position : 'xyz'}

// console.log(emp)

