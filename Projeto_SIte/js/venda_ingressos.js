function analisar() {
    var soma1 = Number(quantidade_ingressos1.value) * Number(50);
    var soma2 = Number(quantidade_ingressos2.value) * Number(25);
    var soma3 = Number(quantidade_ingressos3.value) * Number(50);
    var soma4 = Number(quantidade_ingressos4.value) * Number(25);
    // var somat = soma;
    // var soma1t = soma1;


    qnt.innerHTML = ` Setor Norte: R$${soma1.toFixed(2)}<br>
    Setor Norte-Meia: R$${soma2.toFixed(2)}<br>
    Setor Sul: R$${soma3.toFixed(2)}<br>
    Setor Sul-Meia: R$${soma4.toFixed(2)}`;

    console.log(soma1, soma2, soma3, soma4)
    var total = Number(soma1 + soma2 + soma3 + soma4);

    console.log('valor da soma: ', total)
    qnt.innerHTML += `<br>Total: R$${total.toFixed(2)}`



}

function compra() {

    id01.style.display = 'block';


}


function finalizado() {
    myModal1.style.display = 'block';
    id01.style.display = 'none';




    var modal = document.getElementById("myModal1");

    var span = document.getElementsByClassName("close")[0];

    // Quando o usuário clicar em <span> (x), feche o modal
    span.onclick = function () {
        myModal1.style.display = "none";
    }
    // Quando o usuário clicar em qualquer lugar fora do modal ele fecha
    window.onclick = function (event) {
        if (event.target == myModal1) {
            myModal1.style.display = "none";
        }
    }
}










