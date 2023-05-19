function validarFormulario() {
    var username = document.getElementById('username').value;
  
    if (username === '') {
      alert('Por favor, ingresa un usuario válido.');
      return false;
    }

    return true;    
}