class Account {

    public nickname?: string;

    constructor(public readonly id: number, public owner: string, private _balance: number) {}

    deposit(amount: number): void {
        if(amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }

    // Getter
    get balance() {
        return this._balance;
    }

    // Setter
    set balance(balance: number) {
        if(balance < 0)
            throw new Error('Invalid balance');
        this._balance = balance;
    }

}

// Use class to create objects
let account = new Account(1, "Russel", 0);
console.log(account);
account.deposit(100);
console.log(account);
account.deposit(150);
console.log(account);
let balance = account.balance;
console.log("Balance: " + balance);
account.balance = 300;
console.log("Balance: " + account.balance);
console.log(typeof account);
console.log(account instanceof Account);

console.log("==========================");

// Index Signature: Create properties Dynamically
class SeatAssignment {
    [SeatNumner: string]: string;
}

let seat = new SeatAssignment();
seat.S1 = 'Russel';
seat.S2 = 'Micha';
seat['S3'] = "Prunelle";
console.log(seat);