{  
    //nullable types

    const searchName=(value: string|null)=>{
        
        if (value){
            console.log('New data found')
        } else{
            console.log('NO data founded here')
        }
    }

    searchName('')


    const speed=(value:unknown)=>{

        if (typeof value=== 'number'){
            
            const speedperhour= (value*1000)/3600
            console.log(`${speedperhour} KM/h`)
        } else if (typeof value === 'string'){
              
               const [valueNumber , unit]= value.split(' ')
               const number= parseInt (valueNumber)


               const speedperhour= (number*1000)/3600
            console.log(`${speedperhour} KM/h`)
               
        } else{
            console.log('wrong input')
        }

    }

    speed(100)



    //never

    const throwError=(msg:string)=>{
        throw new Error(msg);
        
    }

    throwError('picture abhi baki hey')

}