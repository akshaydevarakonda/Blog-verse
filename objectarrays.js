let person = {
    name : "Akshay",
    age:20
}
 console.log(person.name)
 console.log(person["age"])

 const {name,age} = person;//Destructuring assigniment

  console.log(name)
  console.log(age)

  let fruits=["apple","orange","lemon"]
  console.log(fruits[0])

  let num=[1,2,3,4,5]
  let square=num.map((num)=>num*num)//Transfrom each element
  console.log(square)

  let evens=num.filter((num)=>num%2==0)//filter values based on even or odd
  console.log(evens)

  let sum=num.reduce((present,num)=>present+num,0)//reduce
  console.log(sum)

  let students=[{name:"Akshay",marks:99},{name:"Badri",marks:95},{name:"Suresh",marks:89}]
  console.log(students[1])
  let maxmarks=0;
  let topper="";
  for(let student of students)
  {
  if(student.marks>maxmarks){
    maxmarks=student.marks;
    topper=student.name
  }

  }
  console.log(`Topper is ${topper} and he got ${maxmarks}`)

 