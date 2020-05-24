import { Cliente } from "./Cliente.js";
import { Poupanca } from "./contas/Poupanca.js";
import { Cc } from "./contas/Cc.js"
import { CSalario } from "./contas/CSalario.js"

const cliente1 = new Cliente('Emanuel', 5448796521);

const CcEmanuel = new Cc(21045, cliente1);
CcEmanuel.depositar(500);
CcEmanuel.sacar(100);
console.log(CcEmanuel);

const ContaPoupanca = new Poupanca(50, cliente1, 21045);
console.log(ContaPoupanca);
ContaPoupanca.depositar(3000);
console.log(ContaPoupanca);

const contaSalario = new CSalario(cliente1);
contaSalario.depositar(3800)
console.log(contaSalario)

CcEmanuel.sacar(100)
console.log(CcEmanuel);


