"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
let account = new Account(1, "Russel", 0);
console.log(account);
account.deposit(100);
console.log(account);
account.deposit(150);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map