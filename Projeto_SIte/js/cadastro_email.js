function validacao() {
    if(!form.nome.value || typeof form.nome.value == undefined || form.nome.value==null || form.nome.value==''){
        alert('Campo nome esta vazio');
        return false;
    }
    if(!form.sobrenome.value || typeof form.sobrenome.value == undefined || form.sobrenome.value==null || form.sobrenome.value==''){
        alert('Campo sobrenome vazio');
        return false;
    }
    
    if(form.senha.value.length <8){
        alert('A senha deve conter no mínimo 8 caracteres');
        return false;
    }

    if(form.senha.value != form.senha2.value){
        alert('As senhas não correspodem')
        return false;
    }
    if(form.email.value=='' || form.email.value.indexOf('@')==-1 || form.email.value.indexOf('.')==-1) {
        alert('Por favor, digite um endereço de e-mail válido');
        return false;
    }
}