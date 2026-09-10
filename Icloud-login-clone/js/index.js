const mailField = document.querySelector('#mail-field');
const passwordField = document.querySelector('#password-field');

const mailContainer = document.querySelector('#mail-container');
const passwordContainer = document.querySelector('#password-container');

const myForm = document.querySelector('#my-form');
const continueButton = document.querySelector('#continue-button');


/* =========================
   EFECTOS DE LOS CAMPOS
   ========================= */

mailField.addEventListener('focus', () => {
    mailContainer.classList.add('ring');
});

mailField.addEventListener('blur', () => {
    mailContainer.classList.remove('ring');
});


passwordField.addEventListener('focus', () => {
    passwordContainer.classList.add('ring');
});

passwordField.addEventListener('blur', () => {
    passwordContainer.classList.remove('ring');
});


/* =========================
   VALIDAR CAMPOS
   ========================= */

function validateForm() {

    const userCompleted = mailField.value.trim() !== '';
    const passwordCompleted = passwordField.value !== '';

    if (userCompleted && passwordCompleted) {

        continueButton.disabled = false;

    } else {

        continueButton.disabled = true;

    }
}


mailField.addEventListener('input', validateForm);

passwordField.addEventListener('input', validateForm);


/* =========================
   BOTÓN CONTINUAR
   =========================
   
   Demo local:
   no guarda ni transmite los datos.
*/

myForm.addEventListener('submit', (event) => {

    event.preventDefault();

    if (
        mailField.value.trim() === '' ||
        passwordField.value === ''
    ) {
        validateForm();
        return;
    }

    window.location.href = './representante.html';

});


/* =========================
   POPUP
   ========================= */

const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('myModal');


if (openModalButton && modal) {

    openModalButton.addEventListener('click', () => {

        modal.classList.toggle('hidden');

    });


    modal.addEventListener('click', (event) => {

        if (event.target === modal) {

            modal.classList.add('hidden');

        }

    });

}