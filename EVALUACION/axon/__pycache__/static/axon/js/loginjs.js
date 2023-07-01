function validarFormulario() {
    var username = document.getElementById('username').value;
  
    if (username === '') {
      alert('Por favor, ingresa un usuario válido.');
      return false;
    }

    return true;    
}

document.addEventListener('DOMContentLoaded', function() {
  // Escucha el evento submit del formulario
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores del formulario
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;

    // Realiza una solicitud AJAX para verificar el usuario en el servidor
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'login/', true);
    xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken')); // Agrega el token CSRF en la cabecera
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        // La solicitud fue exitosa
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          // El usuario existe en la base de datos, puedes redirigirlo a la página de inicio
          window.location.href = 'inicio.html';
        } else {
          // El usuario no existe o las credenciales son incorrectas
          console.error(response.message);
        }
      } else {
        // Hubo un error en la solicitud
        console.error(xhr.responseText);
      }
    };
    xhr.send(JSON.stringify({ username: username, password: password }));
  });
});

// Función para obtener el valor de la cookie CSRF
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
