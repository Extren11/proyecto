document.getElementById("contactooo").addEventListener("submit", function(e) {
    e.preventDefault(); 
  
    var nombreInput = document.getElementById("inputname");
    var apellidoInput = document.getElementById("inputEmail4");


    var nombre = nombreInput;
    var apell = apellidoInput;

  
    var content = "nombre: " + nombre + "\napellido: " + apell;
  
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    element.setAttribute("download", "datos_formulario.txt");
  
    element.style.display = "none";
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  });
  