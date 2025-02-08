{
//

type vahicle={
    bike:string,
    car:string,
    ship:string,

}


type owner= 'bike' | 'car'  | 'ship'

type owner2= keyof vahicle;

const motin: owner2='car'

//

}