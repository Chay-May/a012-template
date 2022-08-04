//AULA THAY

/*const bool1 = false
const bool2 = true

if(bool1)*/ /*A CONDIÇÃO DEVE SER SEMPRE VERDADEIRA PARA O BLOCO SER EXECUTADO*//* { //ENTRA SE FOR TRUE
alert('ENTREI NO IF, SOU TRUE')
} else { //ENTRA DE FOR FALSE
'ENTREI NO ELSE, SOU FALSE'
}*/

/*const bool1 = false
const bool2 = true
const bool3 = true

if(bool1 === bool2) {
    alert('1 e 2 SÃO IGUAIS')
} else if (bool2 === bool3) {
    alert ('2 e 3 SÃO IGUAIS')
} else if (bool1 === bool3) {
    alert('1 e 3 SÃO IGUAIS')
} else {
    alert ('NENHUMA DAS CONDIÇÕES FOI ATENDIDA')
}*/
//NENHUMA FOIA ANTENDIDA, AI O ELSE É EXECUTADO
//ALERT(NENHUMA DAS CONDIÇÕES FOI ATENDIDA)

//QUANDO FALAMOS DE VERIFICAÇÃO, EXECUTAMOS PRIMEIRO AS EXCEÇÕES

//const idade = 28
/*const idade = 61

if (idade>= 60 ) {
    alert('O VOTO É FACULTATIVO')
} else if (idade >= 16 && idade <=18){
    alert('O VOTO É FACULTATIVO')
}
if (idade>= 18) {
    alert('DEVE EMITIR O TÍTULO')
} else {
    alert('NÃO PODE EMITIR O TÍTULO')
}

//OU

if (idade>= 60 || (idade >= 16 && idade <=18)) {
    alert('O VOTO É FACULTATIVO')
}
if (idade>= 18) {
    alert('DEVE EMITIR O TÍTULO')
} else {
    alert('NÃO PODE EMITIR O TÍTULO')
}*/

//SE O NÚMERO FOR 1, EU FAÇO ALGO
//SE NÃO, SE O NÚMERO FOR 2, EU FAÇO ALGO
//SE NÃO, NÃO FAÇO NADA

//EXERCÍCIO AULA 012


const media = 2

if (media >= 5) {
    alert('VOCÊ FOI APROVADA(O)')
} else if (media >= 3) {
    alert('RECUPERAÇÃO')
}
 else if (media < 3) {
    alert('VOCÊ FOI REPROVADA(O)')
} else {
    alert('DADO INVÁLIDO')
}