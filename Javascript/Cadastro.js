const form = document.getElementById('form');
const email = document.getElementById('email');
const nome = document.getElementById("nome");
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('senha1');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nomeValue = nome.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const confirmaSenhaValue = confirmaSenha.value;

    if (nomeValue == "") {
        setErrorFor(nome, "O nome de usuario é obrigatório.");
    } else {
        setSuccessFor(nome);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-Control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-Control success"
}
