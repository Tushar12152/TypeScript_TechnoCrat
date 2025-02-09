{
     // typeGuard

     const add = (num1: number | string, num2: number | string): number | string => {

          if (typeof num1 === 'number' && typeof num2 === 'number') {
               return num1 + num2
          } else {

               return num1.toString() + num2.toString()

          }
     }

     console.log(add('5', 6))


     //type in 

     type User = {
          name: string
     }

     type Admin = {
          name: string;
          role: 'admin';
     }


     const getUser = (user: User | Admin) => {

          if ('role' in user) {
               console.log(`my name is ${user.name} and I am ${user.role}`)
          } else {
               console.log(`my name is ${user.name}`)
          }
     }

     const Normaluser:User={
          name:'Tushar'
     }

     const adminUser:Admin={
          name:'Rahim',
          role:'admin'
     }
     getUser(adminUser)

     //
}