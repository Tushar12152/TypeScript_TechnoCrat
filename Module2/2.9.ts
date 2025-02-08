{//
type a1= number[]
type b1= null

type x= a1 extends null? undefined:string

type y= a1 extends null? undefined: b1 extends null? string:any



type sheikh ={
    car:string
    bike:string
    ship:string
}


type checkVehicles<T> = T extends keyof sheikh? "true":"false";

type hasVehicles= checkVehicles<'ship'>



//
}