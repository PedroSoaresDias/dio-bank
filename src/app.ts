import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Pedro", 19);
console.log(peopleAccount);
peopleAccount.deposit();

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(companyAccount)
companyAccount.deposit();
