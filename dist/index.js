"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        if (balance <= 0)
            throw new Error('Invalid balance');
        this._balance = balance;
    }
}
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
//# sourceMappingURL=index.js.map