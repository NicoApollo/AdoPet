                                        /* Put on/off password */
function mostrarOcultarSenha() {
    var senha=document.getElementById("senha");
    if(senha.type=="password"){
        senha.type="text";
    } else{
        senha.type="password";
    }
}

                                        /* Put on/off Check password */
function mostrarOcultarSenhaDois() {
    var senha=document.getElementById("confirmasenha");
    if(senha.type=="password"){
        senha.type="text";
    } else{
        senha.type="password";
    }
}