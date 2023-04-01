function saludo() {
  alert("Hola a todas");
  var nombre = prompt("Ingrese su nombre: ");
  alert("hola " + nombre);
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function() {
  saludo();
});

var acerca =
document.getElementsByClassName("link")[1]; 

acerca.addEventListener("click", function() {
  alert("gracias por visitar la pagina");
}); 