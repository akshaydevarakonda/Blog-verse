let marks=85
if(marks>=90){
    console.log("A+ Grade")
}else if(marks>=80){
  console.log("A Grade")
}else if(marks>=70)
{
    console.log("B Grade")
}else{
    console.log("Fail")
}

//switch cases
let day=5
switch(day)
{
    case 1:console.log("Monday")
           break;
    case 2:console.log("Tuesday")
          break;
    case 3:console.log("Wednesday")
          break;
    case 4:console.log("Thursday")
          break;
    case 5:console.log("Friday")
          break;
    case 6:console.log("Saturday")
          break;
    case 7:console.log("Sunday")
          break;
    default:console.log("invalid")
          
}

//loops

for(let i=0;i<5;i++)
{
console.log(i)
}

let n=0;

while(n<10)
{
    console.log(n)
    n++
}

i=0;
do{
  console.log("this num is:"+ i)
  i++
}while(i<5);

let colors=["red","blue","green"]
for(i=0;i<colors.length;i++)
{
    console.log(colors[i])
}

for(let color of colors)
{
     console.log(color)
}

let person={
    name:"Akshay",
    age:20,
    collage:"JNTUGV"
}
for(let key in person)
{
    console.log(`${key}:${person[key]}`)
}

for(let i=5;i>=0;i--)
{
    if(i===3)
    {
        continue;
    }else if(i===2)
    {
        break;
    }
    else{
        console.log(i)
    }
}