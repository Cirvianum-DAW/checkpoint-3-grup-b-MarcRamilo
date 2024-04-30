// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.
const products = require('./data.js');

//validacions.js:2 Uncaught ReferenceError: require is not defined
//  at validacions.js:2:18
async function request() {
  try {
    const res = await products;
    console.log(res);
    return res;
  } catch (e) {
    console.error('Error', e);
  }
}
request();
// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');
const cognomInput = document.getElementById('surname');
const mailInput = document.getElementById('email')
const edatInput = document.getElementById('age');
const meessageInput = document.getElementById('message');

console.log(nameInput, cognomInput, mailInput,edatInput)
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
function validarDataNaixement() {


  let avui = new Date();

  let anyNaixement = 2024 - edatInput.value  ;


  //let edat = avui.getFullYear() - dataNaixement;

  if ( edatInput.value = null) 
  {
    displayError(edatInput, "El camp es requerit");
  } else if(anyNaixement > 2007 && edatInput.value !=null ){
    displayError(edatInput, "No es major d'edat");
  } else{
    return edatInput.value;

  }
    
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
  let mailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  return mailRegex.test(mailInput);
}

function validateMessage() {
  removeExistingError(meessageInput);
  let messageRegex = /^[a-zA-ZÀ-ÿ1-100\s]{10,200}$/;
  return messageRegex.test(meessageInput);
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
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if(!validateSurname){
      displayError(cognomInput, "El cognom no és vàlid");
      console.error('Error');
    }

  })

  document
  .getElementById('formulariId')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if(!validateMail){
      displayError(mailInput, "El mail no és vàlid");
      console.error('Error');

    }
  })

  document
  .getElementById('formulariId')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validarDataNaixement()) {
      displayError(edatInput, "Error");
    }
  })

  document
  .getElementById('formulariId')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateMessage()) {
      displayError(meessageInput, "Missatge no valid");
    }
  })


  document
  .getElementById('formulariId')
  .addEventListener('submit', function (event) {
    event.preventDefault();


  })
