{//generic type


    type GenericType<T> = Array<T>

    // const rollNumber:number[]=[1,2,3,4,5,6,8]
    const rollNumber: GenericType<number> = [1, 2, 3, 4, 5, 6, 8]

    // const student: string[]=['rahim','karim','naeem']
    const student: GenericType<string> = ['rahim', 'karim', 'naeem']

    // const isMarried:boolean[]=[true,false,true]
    const isMarried: GenericType<boolean> = [true, false, true]


    const user: GenericType<{ name: string, age: number, isMarried: boolean }> = [

        {

            name: 'tushar',
            age: 10,
            isMarried: false

        },
        {

            name: 'Rahim',
            age: 20,
            isMarried: false

        },

    ]



    //
}