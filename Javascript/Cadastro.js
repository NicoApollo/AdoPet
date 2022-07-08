const form = document.getElementById('form');
const email = document.getElementById('email');
const nome = document.getElementById("nome");
const senha = document.getElementById('senha');
const ConfirmaSenha = document.getElementById('confirma_senha');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const emailValue = email.value;
    const nomeValue = nome.value;
    const senhaValue = senha.value;
    const ConfirmaSenhaValue = ConfirmaSenha.value;

    if (nomeValue == "") {
        setErrorFor(nome, "O nome é obrigatório.");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "formControl error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "formControl success"
}
