// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');
const cognomInput = document.querySelector('input[surname="surname"]');
const mailInput = document.querySelector('input[mail="mail"]')
// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic
// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);
  let nomRegex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
  return nomRegex.test(nameInput);
}
function validateSurname() {
  removeExistingError(cognomInput);
  let cognomRegex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
  return cognomRegex.test(cognomInput);
}

function validateMail() {
  removeExistingError(mailInput);
  displayError(mailInput, "El mail no és vàlid");
  let mailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  return mailRegex.test(mailInput);
}
// addEventListeners...
document
  .getElementById('formulariId')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if(!validateName){
      displayError(nameInput, "El nom no és vàlid");
      console.error('Error');

    }
  })

  document
  .getElementById('formulariId')
  .addEventListener('input', function (event) {
    event.preventDefault();

    if(!validateSurname){
      displayError(cognomInput, "El cognom no és vàlid");
      console.error('Error');
    }
  })

  document
  .getElementById('formulariId')
  .addEventListener('input', function (event) {
    event.preventDefault();

    if(!validateMail){
      displayError(cognomInput, "El mail no és vàlid");
      console.error('Error');

    }
  })