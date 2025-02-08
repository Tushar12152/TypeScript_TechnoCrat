{ 
    // constraints

    const addToCourse=<T extends {
        name:string;
        Id: number;
        mark:number;
        isGood:boolean;
    }>(student:T)=>{

        const course='next level web development';

        return {
            ...student,
            course
        }

    }


interface Student{
     name:string;
     Id: number;
     mark:number;
     isGood:boolean;
     Passed?: true;
}


const student: Student={
    name:'Myzor', 
    Id:152, 
    mark:100, 
    isGood:true
}

type Student1={
    name:string;
     Id: number;
     mark:number;
     isGood:boolean;
     Passed?: boolean;
}

const student1: Student1={
    name:'Bhommel', 
    Id:158652, 
    mark:45, 
    isGood:false,
    Passed:false
}


    console.log(addToCourse<Student1>(student1))


    //
}