{
    //getter and setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _Balance: number;  // private|protected //  //private sudhu parent class ei access tahake r protect child class eo access thake.



        constructor(id: number, name: string, _Balance: number) {
            this.id = id;
            this.name = name;
            this._Balance = _Balance;
        }


        set diposite(amount:number){
            this._Balance=this._Balance+amount
        }
        // public addDeposite(amount: number) {
        //     this._Balance = this._Balance + amount
        // }




        get balance(){
            return this._Balance
        }

        //    public getBalance() {
        //         return this._Balance
        //     }
    }




    const goribAccount = new BankAccount(785, 'Mr.x', 5)
    // goribAccount.addDeposite(1) //functioncall kore
      goribAccount.diposite=45

    //  const myBalance= goribAccount.getBalance() //functioncall kore

    const myBalance = goribAccount.balance

        console.log(myBalance)


    //
}