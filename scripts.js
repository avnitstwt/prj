/*
first class function
high order function
high order function 
closure
lexical scoping
statement function
fat arrow function
declaration function
parameter 
argument
pure functions
impure functions
rest function
spread function
hoisting function




hositing kya hota hai- hoisting mtlb jisme hamein ye capability milti hai ki ham function declare karne ke phle hi use run kar sakte hain wo hoisting function kahlata hai aur jisme ham function ko expression karte hain mtlb 

function expression hoisting support nhi karta aur function declaration hoisting ko support karta hai

closure function: closure function ek aisa function hota hai jo ki function ke andar ek aur function ko return kre aur wo andar waala function bahar waale function se values ko inherit kare that is called closure function

kisi bhi function ko ifee banana hai to sirf phle us poore function ko wrap karna hai aur uske baad aakhri mien function ko open aur close krna hai 

thoda high order function it's not a that much easy function here we need to create a function and inside the function we need to return function without a name and then we can use this entire function to reuse and it will help a lot
let solve some questions by chatgpt

array ke methods- push is the method which pushing the value in the last index of array
pop is the method which removing the value from the last index of the array
shift is also the method which removing the value from the starting of the array
unshift is a method which is kind of similar method of the push method like push pushing the value in the last of the index of the array but the unshift pushing the value in the first of the array

splice is also a method which is kind of working for removing the values from the index which we select for example if we write like arr.splice(2,1) that mean the index will be 2 and the only one will need to remove from the side.

slice is the method which return values on a new array there we can get about what values we want

now lets talk about the sorting of the array where we are sorting the array by using a function it's like where we are keeping something syntax which is mentioned below
arr = [1,2,3,4,5]
let arrSor = arr.sort(funtion(a,b){
return a-b
})
let multiply = (a,b)=> {
    return a*b
    }
    function getScore(...score){
        let total =0
        score.forEarch(function(val){
            total = total+val})}
            
            function functionOne(functionTwo){
                functionTwo()
                
}

functionOne(function(){
    console.log("Function executing another function")
}
)

function outer(){
    let count = 0;
    retun function(){
        count++
        console.log(count)
        }}
        const counter = outer();
        counter()
        counter()
        
        
        */

// function discountCalculator(discount){
//     return function(price){
//         return price - price*(discount/100)
//     }
// }

// let ten = discountCalculator(10)
// console.log(ten(1200))