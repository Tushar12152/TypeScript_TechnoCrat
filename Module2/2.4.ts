{
    //
            interface Developer<T,X=null>{
                name:string;
                computer:{
                    name:string,
                    Model:string,
                    ReliseYear:number,
                };
                Smartwatch:T;
                bike?:X
            }

            type casioWatch={
                brand:string;
                color:string;
                display:string
            }


    const poorDeveloper: Developer<casioWatch>={
        name:'Abul',
        computer:{
            name: 'PC',
            Model: 'B450s',
            ReliseYear:2024
        },
        Smartwatch:{
                brand:'casio',
                color:'black',
                display:'rounded'
        }
    }


    type AppleWatch={
        brand:string,
        color:string,
        isHeartTrack: boolean
    }

    interface YamahaBike{
        Brand:string;
        Model:string
    }

    const richDeveloper: Developer<AppleWatch,YamahaBike>={
        name:'rich',
        computer:{
            name: 'Laptop',
            Model: 'HP-06505',
            ReliseYear:2027
        },
        Smartwatch:{
                brand:'Apple',
                color:'Gold',
                isHeartTrack:true
        },
        bike:{
            Brand:'Yamaha',
            Model:'FZX'
        }
    }

    console.log(richDeveloper)



    //
}