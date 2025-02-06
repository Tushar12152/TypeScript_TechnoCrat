//type alias


type Student={
    name:string;
    age:number;
    gender?:string;
    contact?:string
    roll:number
}

const student1:Student={
    name:'tushar',
    age:15,
    gender:'male',
    contact:'58516496',
    roll: 15
}

const student2:Student={
    name:'Rahim',
    age:18,
    gender:'male',
    
    roll: 45
}

const student3:Student={
    name:'Rahim',
    age:18,
    contact:'58516496',
    roll: 45
}


{
    type Username= string

const name:Username ='ali'
const firstName:Username= 'Tushar'

}





{

type Add= (num1:number, num2:number)=>number

 const add: Add=(num1, num2)=>{
    return num1+num2
 }

}