{
    //OOP--->Class

    class Animal {
    //    public name:string;
    //    public spiecies:string;
    //    public sound:string;

        constructor(public name:string, public spiecies:string,public sound:string){
        //    this.name=name;
        //    this.spiecies= spiecies;
        //    this.sound= sound; 
        }

        makesound(){
            console.log(`the ${this.name} says ${this.sound}`)
        }
    }


    const dog= new Animal('Deshi kutta','Dog','ghew ghew')
    const cat= new Animal('desi bilai','cat','mew mew')

    dog.makesound()
    //

}