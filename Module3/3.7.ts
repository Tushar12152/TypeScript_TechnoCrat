{
    //ststic in OOP

    class counter {
       static count: number = 0;

       static increment(){
            return counter.count=counter.count+1;
        }

       static decrement(){
            return counter.count=counter.count-1; 
        }
    }

    // const instance1= new counter()
    console.log(counter.increment())
   

    // const instance2= new counter()
    console.log(counter.decrement())




    //

}