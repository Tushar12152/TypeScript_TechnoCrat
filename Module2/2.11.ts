{
    //utility type
    //pick

    type person = {
        name: string,
        roll: number,
        email?: string,
        contact: number
    }


    type nameEmail = Pick<person, 'name' | 'email'>
    //omit
    type contactInfo = Omit<person, 'name' | 'roll'>
    //required
    type requiredPerson = Required<person>
    // partial
    type partialPerson= Partial<person>
    //readOnly

    type ReadPerson = Readonly<person>

    const person1: ReadPerson={
        name:'Tushar',
        roll:452,
        email:'fgys@hay',
        contact: 1586520
    }

    //   person1.name='naeem'


    //record type

    type MyObj= Record<string,string|number>

    const obj={
        name:'Tushar',
        roll:12,
        email:'@ddjd',

    }


    const emptyObj: Record<string,unknown> ={}












    //

}