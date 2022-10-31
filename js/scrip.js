let password = document.getElementById("password");
const btnCopia = document.getElementById("btn-copia");
const btnGenerar = document.getElementById("btn-generar");
const inputDoce = document.getElementById("input-doce");
const inputNueve = document.getElementById("input-nueve");
const inputSeis = document.getElementById("input-seis");
const inputLetras = document.getElementById("input-letras");
const inputSoloNumeros = document.getElementById("input-solo-numeros");
const inputCaracteres = document.getElementById("input-caracteres");
const inputMayusculas = document.getElementById("check-mayuscula");
const inputMinusculas = document.getElementById("check-minuscula");
const inputNumeros = document.getElementById("check-numeros");
const inputSimbolos = document.getElementById("check-simbolos");
const opcionSeleccionada = [];
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopkrstuvwxyz";
const numeros = "123456789";
const simbolos = "%$^&!#";

let longitud = [];

inputDoce.addEventListener("change", () => {
  if (inputDoce.checked) {
    let numero = 12;
    longitud.push(numero);
  } else {
    longitud.pop();
  }
});

inputNueve.addEventListener("change", () => {
  if (inputNueve.checked) {
    let numero = 9;
    longitud.push(numero);
  } else {
    longitud.pop();
  }
});

inputSeis.addEventListener("change", () => {
  if (inputSeis.checked) {
    let numero = 6;
    longitud.push(numero);
  } else {
    longitud.pop();
  }
});

inputLetras.addEventListener(
  "change",
  (e) => {
    opcionSeleccionada.length = 0;
    inputSimbolos.checked = false;
    inputNumeros.checked = false;
    if (inputLetras.checked) inputNumeros.disabled = event.target.checked;
    inputSimbolos.disabled = event.target.checked;
    inputMayusculas.disabled = !event.target.checked;
    inputMinusculas.disabled = !event.target.checked;
  },
  false
);

inputSoloNumeros.addEventListener(
  "change",
  (e) => {
    opcionSeleccionada.length = 0;
    inputMayusculas.checked = false;
    inputMinusculas.checked = false;
    inputSimbolos.checked = false;
    if (inputSoloNumeros.checked)
      inputMayusculas.disabled = event.target.checked;
    inputMinusculas.disabled = event.target.checked;
    inputSimbolos.disabled = event.target.checked;
    inputNumeros.disabled = !event.target.checked;
  },
  false
);

inputCaracteres.addEventListener(
  "change",
  (e) => {
    if (inputCaracteres.checked)
      inputMayusculas.disabled = !event.target.checked;
    inputMinusculas.disabled = !event.target.checked;
    inputSimbolos.disabled = !event.target.checked;
    inputNumeros.disabled = !event.target.checked;
  },
  false
);

inputMayusculas.addEventListener("click", () => {
  if (inputMayusculas.checked) {
    opcionSeleccionada.push(mayusculas);
  } else {
    opcionSeleccionada.pop();
  }
});

inputMinusculas.addEventListener("click", () => {
  if (inputMinusculas.checked) {
    opcionSeleccionada.push(minusculas);
  } else {
    opcionSeleccionada.pop();
  }
});

inputNumeros.addEventListener("click", () => {
  if (inputNumeros.checked) {
    opcionSeleccionada.push(numeros);
  } else {
    opcionSeleccionada.pop();
  }
});

inputSimbolos.addEventListener("click", () => {
  if (inputSimbolos.checked) {
    opcionSeleccionada.push(simbolos);
  } else {
    opcionSeleccionada.pop();
  }
});

let contraseña = "";
const concatenarOpciones = () => {
  contraseña = opcionSeleccionada.join("");
  return contraseña;
};

let clave = "";
const generarContraseniaFinal = (longitud) => {
  longitud = longitud[longitud.length - 1];
  for (let x = 0; x < longitud; x++) {
    let aleatorio = Math.floor(Math.random() * contraseña.length);
    clave += contraseña.charAt(aleatorio);
  }
  return clave;
};

btnGenerar.addEventListener("click", () => {
  opcionSeleccionada;
  concatenarOpciones();
  generarContraseniaFinal(longitud);
  document.getElementById("password").value = clave;
  clave = "";
});

btnCopia.addEventListener("click", (e) => {
  event.preventDefault();
  password.select();
  document.execCommand("copy");
  password.style.backgroundColor = "yellow";
});
