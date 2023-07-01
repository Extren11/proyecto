document.getElementById("contactooo").addEventListener("submit", function(e) {
  e.preventDefault(); 

  var nombreInput = document.getElementById("inputname").value;
  var apellidoInput = document.getElementById("inputApellido").value;
  var correoInput = document.getElementById("inputAdddress").value;
  var calleInput = document.getElementById("inputAddress2").value;
  var ciudadInput = document.getElementById("inputCity").value;
  var regionInput = document.getElementById("inputState").value;
  var zipInput = document.getElementById("inputZip").value;

  var nombre = nombreInput;
  var apellido = apellidoInput;
  var correo = correoInput;
  var calle = calleInput;
  var ciudad = ciudadInput;
  var region = regionInput;
  var zip = zipInput;

  var content = "nombre: " + nombre + "\napellido: " + apellido + "\ncorreo: " + correo + "\ncalle: " + calle + "\nciudad: " + ciudad + "\nregion: " + region + "\nzip: " + zip; 

  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
  element.setAttribute("download", "datos_formulario.txt");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
});
