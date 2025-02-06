// union and intersection type


type User={
     name:string
     bloodGroup:'o+'|'o-'|'AB+'
     email?: string

}

const newUser:User={
     name: 'tushar',
     bloodGroup:'o-',

} 


// intersection type

type FrontendDeveloper ={
    skill: string[];
    designation1: 'CMS developer'| 'junior developer'
}

type BackendDeveloper ={
    skill: string[];
    designation2: 'Python'| 'node Express'
}

type FullStackDeveloper= FrontendDeveloper & BackendDeveloper

const fullStackDeveloper: FullStackDeveloper={
         skill:['HTML','CSS','Express'],
         designation1:'junior developer',
         designation2:'Python'

}