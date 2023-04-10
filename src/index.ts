class Account {

    public nickname?: string;

    constructor(public readonly id: number, public owner: string, private _balance: number) {}

    deposit(amount: number): void {
        if(amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }

    getBalance() {
        return this._balance;
    }

}

// Use class to create objects
let account = new Account(1, "Russel", 0);
console.log(account);
account.deposit(100);
console.log(account);
account.deposit(150);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);