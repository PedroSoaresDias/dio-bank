import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (valorEmprestimo: number): void => {
        if (this.validateStatus()) {
            const saldoComEmprestimo: number = this.getBalance() + valorEmprestimo;

            this.setBalance(saldoComEmprestimo)
            console.log(`A empresa pegou um empréstimo junto com seu saldo no valor de R$${saldoComEmprestimo}`)
        }
    };

    deposit = (valorDeposito: number): void => {
        if (this.validateStatus()) {
            const valorDepositado: number = this.getBalance() + valorDeposito;

            this.setBalance(valorDepositado);
            console.log(`A empresa depositou R$${valorDeposito}`);

            console.log(`O saldo atual da empresa é R$${this.getBalance()}`);
        }
    }

    withdraw = (valorSaque: number): void => {
        if (this.validateStatus()) {
            if (valorSaque <= this.getBalance()) {
                const valorSacado: number = this.getBalance() - valorSaque;
                this.setBalance(valorSacado)
                console.log(`A empresa sacou R$${valorSaque}`);
                console.log(`O saldo atual da empresa é de R$${this.getBalance()}`);
            } else {
                console.log(`Valor do saque é maior que o valor do seu saldo`);
            }
        }
    };
}