class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter for balance
  public get balance(): number {
    return this._balance;
  }

  // Method to deposit money into the account
  public deposit(amount: number): void {
    if (amount < 0) {
      throw new Error('Deposit amount must be positive');
    }
    this._balance += amount;
  }

  // Method to withdraw money from the account
  public withdraw(amount: number): void {
    if (amount < 0) {
      throw new Error('Withdrawal amount must be positive');
    }

    if (amount > this._balance) {
      throw new Error('Insufficient funds');
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
console.log(`Initial Balance: $${myAccount.balance}`);

myAccount.deposit(500);
console.log(`Balance after deposit: $${myAccount.balance}`);

myAccount.withdraw(200);
console.log(`Balance after withdrawal: $${myAccount.balance}`);
