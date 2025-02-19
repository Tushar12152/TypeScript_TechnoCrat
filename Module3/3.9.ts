{
    //abstructions

    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }


    class Car implements Vehicle1 {

        name: string;

        constructor(name: string) {
            this.name = name
        }

        startEngine(): void {
            console.log(`I am starting the ${this.name} car engine`)
        }

        stopEngine(): void {
            console.log(`I am stopping the car engine`)
        }

        move(): void {
            console.log(`I am moving the car`)
        }

        test() {
            console.log(`I am testing the method`)
        }
    }


    const toyotaCar = new Car('toyota')
    const Honda = new Car('Honda')
    toyotaCar.startEngine()
    Honda.startEngine()




    abstract class car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void

        test() {
            console.log(`I am testing the method`)
        }
    }

    class lambCar extends car2{
        startEngine(): void {
             console.log('I am starting engine')
        }

        stopEngine(): void {
            console.log(`I am stopping the car`)
        }

        move(): void {
            console.log(`I am movig the car`)
        }
    }


    //
}