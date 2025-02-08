{
    // mapped type

    const arrofNum:number[]=[1,2,3,4,5,6]

    const arrofString= arrofNum.map(number=>number.toString())
    
    console.log(arrofString)



    type AreaNumber={
        height: string;
        base: string;
        width:string;

    }

    type AreaString ={
        [ key in keyof AreaNumber ]:number
    }



type Areacredentials<T>={
    [key in keyof T]:T[key]
}

interface area1{
    name:string;
    Roll:number;
    Subject:string;
    isLearner?:boolean

}

    const Area1: Areacredentials<area1> = {
          name:'Tushar',
          Roll:785,
          Subject:'CSE'

    }


    

    
    //

}