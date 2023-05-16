import validator from './validator.js';

const inputCard = document.getElementById("cardNumber");
inputCard.addEventListener("input", function () {
  if (inputCard.value.length > 16) {
    inputCard.value = inputCard.value.slice(0, 16);
  }
})

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const month = document.getElementById("month");
const cvv = document.getElementById("cvv");
const formulario = document.getElementById("formulario");
const botonEnviar = document.getElementById("enviar");
const error = document.getElementById("error");
const thankYouTitle = document.getElementById("thankYouTitle");
const thankYouCard = document.getElementById("thankYouCard");
const thankYouEmail = document.getElementById("thankYouEmail");
const thankYouP = document.getElementById("thankYouP");
const thankYou = document.getElementById("thankYou");
const franquicia = document.createElement("img");

botonEnviar.addEventListener("click", function () {
  if (inputCard.value && email.value && month.value && cvv.value) {
    if (validator.isValid(inputCard.value) === false) {
      error.innerText = "Ingrese un número de tarjeta válido";
    }
    if (validator.isValid(inputCard.value) === true) {
      thankYou.style.backgroundColor = "white";
      thankYou.style.margin = "0 auto";
      thankYou.style.width = "700px";
      thankYou.style.borderRadius = "10px";
      thankYou.style.fontWeight = "400";
      thankYou.style.paddingTop = "30px";
      thankYou.style.paddingBottom = "80px";
      thankYouTitle.innerText = "¡Gracias por tu compra " + fullName.value + "!";
      thankYouCard.innerText = "Tarjeta: " + validator.maskify(inputCard.value);
      thankYouCard.append(franquicia);
      franquicia.src = validator.franquicia(inputCard.value);
      franquicia.classList.add("imgCard");
      thankYouEmail.innerText = "Email: " + email.value;
      thankYouP.innerText = "Te enviaremos los detalles de tu pedido al correo ingresado.";
      error.innerText = "";
      formulario.style.display = "none";
    }
  } else error.innerText = "*Se requiere llenar todos los campos";
})
