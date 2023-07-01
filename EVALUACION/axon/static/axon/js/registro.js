document.addEventListener('DOMContentLoaded', function() {
    // Escucha el evento submit del formulario
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault(); // Previene el envío del formulario
  
      // Obtiene los valores del formulario
      var username = document.querySelector('input[name="username"]').value;
      var password = document.querySelector('input[name="password"]').value;
      var email = document.querySelector('input[name="email"]').value;
  
      // Crea un objeto FormData con los valores del formulario
      var formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('email', email);
  
      // Realiza una solicitud AJAX para enviar los datos al servidor
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'registro/', true);
      xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken')); // Agrega el token CSRF en la cabecera
      xhr.onload = function() {
        if (xhr.status === 200) {
          // La solicitud fue exitosa
          console.log(xhr.responseText); // Puedes mostrar una respuesta en la consola
        } else {
          // Hubo un error en la solicitud
          console.error(xhr.responseText);
        }
      };
      xhr.send(formData);
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
  