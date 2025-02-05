// function
// Arrow Function

function add(num1:number,num2:number):number{
    return (num1+num2)
}

add(2,2)

const addArrow=(num1:number, num2:number): number=>{
     return (num1+num2)
}

add(5,5)


// object--->function----->method



const poorUser={
   name:'tushar',
   balance:0,
   addBalance(balance:number): string{
     return `my new balance is: ${this.balance+balance}`
   }

}


const Arr :number[]=[1,2,3]

const newArr= Arr.map((elem:number):number=>{
    return elem*elem
})
