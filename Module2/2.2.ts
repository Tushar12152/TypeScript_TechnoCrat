{
    // type vs interface

type User1={
    name:string;
    age:number
}

interface User2{
    name:string;
    age:number
}

const user1:User2={
    name:'Tushar',
    age:25
}


type Roll= number[]

interface Roll2{
   [index:number]:number
}

const roll:Roll2=[1,2,2,4,5,6,7,7]



type Add= (num1:number,num2:number)=>number

interface Add2{
    (num1:number,num2:number):number
}

const add: Add2=(num1,num2)=>{
    return num1+num2
}

console.log(add(2,8))




//
}