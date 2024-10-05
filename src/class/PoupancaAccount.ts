import { DioAccount } from "./DioAccount";

export class PoupancaAccount extends DioAccount {
    constructor(name: string, numberAccount: number) {
        super(name, numberAccount)
    }

    deposit = (valorDeposito: number): void => {
        if (this.validateStatus()) {
            const valorDepositado: number = this.getBalance() + valorDeposito;

            this.setBalance(valorDepositado);
            console.log(`Você depositou R$${valorDeposito}`);

            const valorExtra: number = this.getBalance() + 10;

            console.log(`Seu saldo atual é R$${this.setBalance(valorExtra)}`);
        }
    }
}