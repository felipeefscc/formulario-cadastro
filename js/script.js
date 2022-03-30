function sendwpp() {
    
    var name = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var rg = document.getElementById("rg").value;
    var dtnasci = document.getElementById("dtnasci").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var phone1 = document.getElementById("phone1").value;
    var numero = document.getElementById("numero").value;
    var endereco = document.getElementById("endereco").value;
    var bairro = document.getElementById("bairro").value;
    var cep = document.getElementById("cep").value;
    var complemento = document.getElementById("complemento").value;
    var planos = document.getElementById("planos").value;
    var vencimento = document.getElementById("vencimento").value;


    var url = "https://wa.me/+55718000500133?text="
    + "Name: " + name + "%0a"
    + "Cpf: " + cpf + "%0a"
    + "rg: " + rg  + "%0a"
    + "Data de nascimento: " + dtnasci + "%0a"
    + "Email: " + email  + "%0a"
    + "Telefone: " + phone  + "%0a"
    + "Telefone 1: " + phone1  + "%0a"
    + "Endereço: " + endereco  + "%0a"
    + "Número: " + numero  + "%0a"
    + "Bairro: " + bairro  + "%0a"
    + "Cep: " + cep  + "%0a"
    + "Complemento: " + complemento + "%0a"
    + "Plano: " + planos + "%0a"
    + "Vencimento: " + vencimento;
    

    window.open(url, '_blank').focus();
}

