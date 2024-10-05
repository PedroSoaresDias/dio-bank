import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PoupancaAccount } from "./class/PoupancaAccount";

// Instanciando com a classe PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(1, "Pedro", 19);
console.log(peopleAccount);
console.log();
peopleAccount.deposit(100);
peopleAccount.withdraw(30);

console.log("\n =================== \n");

// Instanciando com a classe CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(companyAccount);
console.log();
companyAccount.deposit(200);
companyAccount.withdraw(70);
companyAccount.getLoan(1000)

console.log("\n =================== \n");

// Instanciandi com a classe PoupancaAccount
const poupancaAccount: PoupancaAccount = new PoupancaAccount("Pedro", 21);
console.log(poupancaAccount);
console.log();
poupancaAccount.deposit(140);
poupancaAccount.withdraw(40);