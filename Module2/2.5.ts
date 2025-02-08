{
//
  
const createArrayWithGeneric=<T,I>(X:T, Y:I ):[T,I]=>{
    return [X,Y]
}

const result= createArrayWithGeneric<number,number>(2,5)

interface User{
      name:string,
      age?:number,
      
}

interface User1{
    age:number,
   
}
const res2= createArrayWithGeneric<User,number>({name:'Tushar' },15 )

console.log(res2)




//

}