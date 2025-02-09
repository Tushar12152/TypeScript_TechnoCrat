{
    //inheritence

    class parent {
        name: string;
        age: string;
        adress: string;

        constructor(name: string, age: string, adress: string) {
            this.name = name
            this.age = age
            this.adress = adress
        }

        getSleep(numberOfHours: number) {
            console.log(`${this.name} is spleep ${numberOfHours} hours in a day`)
        }
    }


    class student extends parent {
        constructor(name: string, age: string, adress: string) {
            super(name, age, adress)
        }
    }

    const student1 = new student('Rahim', '20', 'UK')

    student1.getSleep(5)




    class teacher extends parent {
        
        designation: string

        constructor( name: string,  age: string,  adress: string,  designation: string) {
            super(name, age, adress)
            this.designation = designation
        }

     

        getClass(numberOfClass: number) {
            console.log(`${this.name} sir is takeing ${numberOfClass} class in a day`)
        }


    }

    const teacher1 = new teacher('Zia', '45', 'UK', 'assistant teacher')
    teacher1.getClass(7)
    teacher1.getSleep(5)
  



    //
}