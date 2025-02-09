{
    //instance of guard

    class Animal {
        name: string;
        species: string;
        sound: string


        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species
            this.sound = sound
        }

        makeSound() {
            console.log(`${this.name} is calling ${this.sound}`)
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string, sound: string) {
            super(name, species, sound)
        }

        getBark() {
            console.log(`I am barking`)
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string, sound: string) {
            super(name, species, sound)
        }

        getMeaw() {
            console.log(`I am meawing`)
        }
    }

    const isDog=(animal:Animal)=>{
        return animal instanceof Dog
    }
    const isCat=(animal:Animal)=>{
        return animal instanceof Cat
    }


    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.getBark()
        } else if (isCat(animal)) {
            animal.getMeaw()
        } else{
            animal.makeSound()
        }
    }


    const dog = new Dog('mr. Dog', 'dog', 'ghew ghew')
    const cat = new Cat('mr. cat', 'cat', 'mew mew')
    const hen = new Animal('mr. hen', 'hen', 'kukkurukuk')


    cat.getMeaw()

    getAnimal(dog)



    //
}