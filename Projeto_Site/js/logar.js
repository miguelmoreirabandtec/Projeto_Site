function logar() {
    if ((!email.value == 'admin.admin@gmail.com' && senha.value == '12345678') || (email.value == 'admin.admin@gmail.com' || senha.value == '12345678')) {

        if (email.value == 'admin.admin@gmail.com' && senha.value == '12345678') {
             alert(`Seja bem vindo tricolor`);
            location.href = "./venda_ingressos.html";


        } else {
            alert('E-mail ou senha inválidos');
        }
    }
}

