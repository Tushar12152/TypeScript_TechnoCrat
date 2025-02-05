// spread operator
//distructuring
//rest operator


const bros1: string[]=['naim','Tushar', 'muin']
const bros2: string[]= ['oo','hmm']

bros1.push(...bros2)


const mentor1={
    next:'tanmoy',
    TS: 'mezba',
    dbms: 'Firoz'
}

const mentor2 ={
    express:'mir',
    mongose:'nahid'
}

const mentorsList={
    ...mentor1,
    ...mentor2
}


const greetFriends=(...friends: string[])=>{

    friends.forEach((friend:string)=>{
             console.log(friend)
    })

}


greetFriends('dd','dds','rr')


