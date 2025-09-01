//7 array desstructuring (advance)


const product = {name : 'shirt' , price : 500 ,qty : 8}

// const discount = product.price*20/100;
// const youpay = product.price - discount;
// const vat = product.price*5/100;
// const total = youpay + vat ;
// console.log(total);

// const price = product.price

// const discount = price*20/100;
// const youpay = price - discount;
// const vat = price*5/100;
// const total = youpay + vat ;
// console.log(total);


// example 2 (jodi right side e obj thake taile left e o lekha jay)
const {price , qty , tax} = {name : 'shirt' , price : 500 ,qty : 8}
const { name } = product

console.log(tax)  // undefined

const discount = price*20/100;
const youpay = price - discount;
const vat = price*5/100;
const total = youpay + vat ;

console.log(total);


//example 3 in array
const num = [2,3,4,5]  

const [first , second ] = num

