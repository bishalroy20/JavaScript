// 4 arrow function



//function declairation
function add(a , b){
    return a+b;
}

// console.log(add(78 , 92));

// function expression
const addition = function(n1 , n2){
    return n1+n2;
}

// console.log(addition(17,25));


// arrow function
const add2 = (c , d) => c+d
// console.log(add2(8,6));


const isfirst = (x,y)=> (x > y)

// console.log(isfirst(5,6))

const doMath = (x,y)=>{
    x = x*2;
    y=y+45;
    return x+y;
}