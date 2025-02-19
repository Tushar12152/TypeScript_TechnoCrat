{
    // polymorphisom

    class person {
        getsleep() {
            console.log(`I am sleepling 9 hours in a day.`)
        }
    }

    class student extends person {
        getsleep() {
            console.log(`I am sleepling 7 hours in a day.`)
        }
    }

    class developer extends person {
        getsleep() {
            console.log(`I am sleepling 5 hours in a day.`)
        }
    }

    const getSleepingHours = (param: person) =>{
        param.getsleep()
    }


    const person1 = new person()
    const person2 = new student()
    const person3 = new developer()

     getSleepingHours(person2)




     class Shape{
        getArea(): number{
            return 0
        }
     }



     class Circle extends Shape {
        
         radious:number;

         constructor(radious:number){
            super()
            this.radious=radious
         }

        getArea(): number {
            return Math.PI*this.radious*this.radious
        }
     }


     class Reactangle extends Shape {
        
        height:number;
        width:number;

        constructor(height:number,width:number){
           super()
           this.height=height
           this.width=width
        }

       getArea(): number {
           return this.height*this.width
       }
    }

    const getShapeArea=(Param:Shape)=>{
        console.log(Param.getArea())
    }


    const shape1= new Shape();
    const shape2= new Circle(10);
    const shape3= new Reactangle(2,2);

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)



    //

}