// let listaDeNomes = ['Afonso', 'Marcio', 'Nathan', 'Caio', 'Isabelle', 'Felipe', 'Felipe', 'Rodrigo', 'João', 'Junior', 'Gabriel', 'Nicolas'];



// let numeroSorteado = Number((Math.random() * 11).toFixed());
// alunoSorteado.innerHTML = `${numeroSorteado + 1} - ${listaDeNomes[numeroSorteado]}`;


// switch(numeroSorteado){
//     case 1:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Afonso`;
//     break;
//     case 2:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Marcio`;
//     break;
//     case 3:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Nathan`;
//     break;
//     case 4:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Caio`;
//     break;
//     case 5:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Isabelle`;
//     break;
//     case 6:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Felipe`;
//     break;
//     case 7:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Felipe`;
//     break;
//     case 8:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Rodrigo`;
//     break;
//     case 9:
//         alunoSorteado.innerHTML = `${numeroSorteado} - João`;
//     break;
//     case 10:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Junior`;
//     break;
//     case 11:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Gabriel`;
//     break;
//     case 12:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Nicolas`;
//     break;
//     default: 
//         alunoSorteado.innerHTML = "Sorteie um aluno";
// }


let listaDeMes = ['Rei', 'Mô', 'Cupido', 'Apaixonado', 'Pagodeiro', 'Cara Perfeito', 'Mensageiro', 'Perturbado', 'Gueri Gueri', 'Coração', 'Linda Voz', 'Criado Mudo'];

let nomeDia = '';
if (Number(dia.value) < 4){
    nomeDia = 'que tanto fez ou tanto faz';
} else if (Number(dia.value) < 7){
    nomeDia = 'que desabou o barraco';
}
