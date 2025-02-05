//Reference type object

const user:{
    companyName:'BdCallding'; //literal type
    firstName:string;
    lastName:string;
    middleName?: string; //optionsal type
    isMarried:boolean;
   readonly  position: string
}={
    companyName:'BdCallding',
    firstName:'tushar',
    lastName:'Imran',
    isMarried:false,
    position:'MERN stack developer'
}

// user.position='Wordpress developer'