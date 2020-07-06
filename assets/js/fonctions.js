/**
 * Fonctions de travail
 */


let myForm = document.querySelector('.validate-form'),
    mail = document.getElementsByClassName('input100')[0],
    motDePasse = document.getElementsByClassName('input100')[1],
    msgErreur = document.querySelector('.message'),
    btnValid = document.getElementsByClassName('login100-form-btn'),
    mailRegex = /^[A-Za-z0-9.-_]+@[A-Za-z]+\.[a-z]{2,6}$/,
    passRegex = /^[A-Z][a-z]+[0-9]{2,4}$/;

function sendForm() {
    /*On  ecoute l'element.
    lorsque l'utilisateur ne rendre pas ses données*/
    myForm.addEventListener('keyup', function(e) {
        if (mail.value === "") {
            msgErreur.classList.add('message-visible');
            msgErreur.textContent = "Vous n'avez entré aucune donnée";
            e.preventDefault();
        } else {
            msgErreur.classList.remove('message-visible');
        }
    })

    // // verification  du formulaire a <<submit>>
    myForm.addEventListener('submit', function(e) {
        if (mail.value === "") {
            msgErreur.classList.add('message-visible');
            msgErreur.textContent = "Le champ adresse e-mail est vide";
            e.preventDefault();
        } else if (mailRegex.test(mail.value) === false) {
            msgErreur.classList.add('message-visible');
            msgErreur.textContent = "Adresse e-mail est invalide";
            e.preventDefault();
        }
    })


    myForm.addEventListener('submit', function(e) {
        if (motDePasse.value === "") {
            e.preventDefault();
            msgErreur.classList.add('message-visible');
            msgErreur.textContent = "Votre mot de passe n'est pas saisit"
        } else if (passRegex.test(motDePasse.value) === false) {
            msgErreur.classList.add('message-visible');
            msgErreur.textContent = "le mot de passe doit contenir \n une majuscule des miniscules et des chiffres";
            e.preventDefault();
        } else {
            msgErreur.classList.remove('message-visible');
        }
    })

    myForm.addEventListener('submit', function(e) {
        if (mailRegex.test(mail.value) === true && passRegex.test(motDePasse.value) === true) {
            myForm.style.backgroundColor = "cyan"
        } else {}
    })

}
sendForm()