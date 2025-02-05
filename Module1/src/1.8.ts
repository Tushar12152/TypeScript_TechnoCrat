{//distructuring


const poorUser: {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    contact: string;
} ={
    id:1,
    name:{
        firstName:'tushar',
        lastName: 'Imran'
    },
    contact:'0170604631',

}

const {contact, name:{lastName}} =poorUser





//array distructuring


const myFriends=['muin','naim','sobuj','ripon', 'safiq']

const [,,islampurerMal,...rest]=myFriends




}


