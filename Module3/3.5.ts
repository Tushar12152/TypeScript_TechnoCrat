{
    //access modifier

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _Balance: number;  // private|protected //  //private sudhu parent class ei access tahake r protect child class eo access thake.



        constructor(id: number, name: string, _Balance: number) {
            this.id = id;
            this.name = name;
            this._Balance = _Balance;
        }

      public  addDeposite(amount: number) {
            this._Balance = this._Balance + amount
        }

       public getBalance() {
            return this._Balance
        }
    }


    class studentAccount extends BankAccount{
        test(){
            this._Balance    //protected
        }
    }


    const goribAccount = new BankAccount(785, 'Mr.x', 20)
    goribAccount.addDeposite(1)

     const myBalance= goribAccount.getBalance()

     console.log(myBalance)


    //
}