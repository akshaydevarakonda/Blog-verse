//Arithmetic operators
let x=10,y=3

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//Assignment operators

let z=5
z+=3
console.log(z)
z-=2
console.log(z)
z*=5
console.log(z)
z/=5
console.log(z)
z%=4
console.log(z)
z**=4
console.log(z)

//comparision operators

let a=10,b="10"

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)

//Logical Operators

let age=20
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))

//String operators

let firstName="Akshay"
let lastName="Devarakonda"
let fullName=firstName+" "+lastName
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName} , welcome to lab`
console.log(correctName)

//Ternary operators

let myAge=19;
if(myAge>=18)
{
    console.log("you can vote")
}
else{
    console.log("You cannot vote")
}

let result=myAge>=18 ? "Eligible to vote ":"You cannot to vote"
console.log(result)

//Increment and Decrement operators

let count=5
console.log(count++) //post increment
console.log(count)
console.log(++count)//pre increment

//typeof operators

console.log(typeof count)
console.log(typeof "akshay")
console.log(typeof 18)