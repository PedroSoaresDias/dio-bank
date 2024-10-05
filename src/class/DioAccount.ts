export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = (valorDeposito: number): void => {
        if (this.validateStatus()) {
            this.balance = this.balance + valorDeposito;

            console.log(`Você depositou R$${valorDeposito}`);

            console.log(`O saldo atual é de R$${this.balance}`);
        }
    }

    withdraw = (valorSaque: number): void => {
        if (this.validateStatus()) {
            if (valorSaque <= this.balance) {
                this.balance = this.balance - valorSaque;

                console.log(`Foi sacado o valor de R$${valorSaque}`);
                
                console.log(`O saldo atual é de R$${this.balance}`);
            } else {
                console.log(`Valor do saque é maior que o valor do seu saldo`);
            }
        }
    };

    getBalance = (): number => {
        return this.balance;
    };

    setBalance = (balance: number): number => {
        return this.balance = balance;
    }
    
    validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error("Conta inválida");
    }
}