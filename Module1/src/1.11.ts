{// ternary, optional chaining, nulish


const age:number=19

age>=18? console.log('adult'):console.log('not adult')


// nulish coalescing

// null or undifined

const isAuthenitcated= null

const res= isAuthenitcated?? 'guest'

console.log(res)


type User={
    name: string
    adress:{
        city: string
        village: string
        post?:string
    }
    phone?: number
}


const user:User={
    name: 'tushar',
    adress:{
        city:'Sarishabari',
        village: 'Satpua'
    }
}


console.log(user?.adress?.post??'not found')

}