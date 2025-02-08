{
    //promise

    const createPromise = ():Promise<string> => {
        return new Promise<string>((resolve, reject) => {

            const data: string = 'yes valid data'

            if (data) {
                resolve(data)
            } else {

                reject('no data found')
            }

        })
    }

    const showData=async()=>{
        const data= await createPromise()
        console.log(data)
    }

    showData()




    //fetching data
    interface Data { userId: number, id: number, title: string, completed: boolean }

    const getTodo=async(): Promise<Data>=>{

        const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data =await res.json()
         return data
        console.log(data)

    }

   console.log(getTodo()) 

    //
}