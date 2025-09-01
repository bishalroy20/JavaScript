// 2. 

// function sum(num1 , num2 ){
function sum(num1 , num2 = 0 ){
    const total = num1 + num2;
    console.log(num1 , num2 , total);
    
}

// sum(10 ) //10 , undefined , NAN without initialize 0
// sum(10) // 10 0 10
// sum(20 , 70); //90
// sum(25,63,98,78,52);  // 25 63 88

function multiply(m1 =1, m2 = 1){
    const result = m1 * m2;
    console.log(result)
}

multiply(10 , 20) // 200
multiply(20);


/* 
function --> default para
add , subtract  --> 0
multiply    --> 1
string      --> " "
array =     -->[]
object      --> {}

 */