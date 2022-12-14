const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const  password = document.getElementById('password')
const  passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if (usernameValue === "") {
        setErrorFor(username, "O nome do usuario é obrigatório.");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else {
        setSuccessFor (email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
       setErrorFor(password, "A senha precisa ter no minimo 7 caracteres."); 
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
        setSuccessFor(passwordConfirmation);
    }
}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adicionar a mensagem de erro
    small.innerText = message;

    //Adicionar a classe de erro 
    formControl.className = "form-control error";
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    
    formControl.className = "form-control success"; 
}