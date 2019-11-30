var ingressos1 = [];
var ingressos2 = [];
var ingressos3 = [];
var ingressos4 = [];

function compra() {

    var totalingressos1 = Number(quantidade_ingressos1.value);
    var totalingressos2 = Number(quantidade_ingressos2.value); 
    var totalingressos3 = Number(quantidade_ingressos3.value);
    var totalingressos4 = Number(quantidade_ingressos4.value);

    

    var soma = totalingressos1 + totalingressos2 + totalingressos3 + totalingressos4;
    var total = 6;
    
    
    if(soma > totalingressos1 && soma > totalingressos2 && soma > totalingressos3 && soma > totalingressos4 ){
        alert('O cliente só pode efetuar a compra de 5 ingressos,no mesmo cadastro.');
        
    } 
    else if(soma == 0){
        alert('Para efetuar uma compra,selecione um tipo de ingresso.')
    } else{
        ingressos1.push(totalingressos1);
        ingressos2.push(totalingressos2);
        ingressos3.push(totalingressos3);
        ingressos4.push(totalingressos4);
    }


    // for(var indice = 0;){

    // }
    

  



}