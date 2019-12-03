function compra() {
    var soma1 = Number(quantidade_ingressos1.value) * Number(50);
    var soma2 = Number(quantidade_ingressos2.value) * Number(25);
    var soma3 = Number(quantidade_ingressos3.value) * Number(50);
    var soma4 = Number(quantidade_ingressos4.value) * Number(25);
    // var somat = soma;
    // var soma1t = soma1;
    qnt.innerHTML = ` Setor Norte: ${soma1}<br>
    Setor Norte-Meia: ${soma2}<br>
    Setor Sul: ${soma3}<br>
    Setor Sul-Meia: ${soma4}`;

    console.log(soma1, soma2, soma3, soma4)
    var total = Number(soma1 + soma2 + soma3 + soma4);

    console.log('valor da soma: ', total)
    qnt.innerHTML += `<br>Total: ${total}`



}














