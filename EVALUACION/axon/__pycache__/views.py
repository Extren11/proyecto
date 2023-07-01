from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User



# Create your views here.

def inicio(request):
    return render(request, 'axon/inicio.html',  {})

def paquetes(request):
    return render(request, 'axon/paquetes.html', {})

def contacto(request):
    return render(request, 'axon/contacto.html', {})

def ingreso(request):
    return render(request, 'axon/ingreso.html', {})

def nosotros(request):
    return render(request, 'axon/nosotros.html', {})

def registro(request):
    return render(request, 'axon/registro.html', {})

def crear_usuario(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')

        # Verificar si el usuario ya existe
        if User.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'message': 'El nombre de usuario ya está en uso'})

        # Crear el usuario en la base de datos
        user = User.objects.create_user(username=username, password=password, email=email)

        if user is not None:
            # El usuario se creó correctamente
            return JsonResponse({'success': True, 'message': 'Usuario creado exitosamente'})
        else:
            # Hubo un error al crear el usuario
            return JsonResponse({'success': False, 'message': 'Error al crear el usuario'})
    else:
        return render(request, 'registro.html')

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Verificar si el usuario existe en la base de datos
        try:
            user = User.objects.get(username=username)
            if user.check_password(password):
                # Credenciales correctas, el usuario existe en la base de datos
                return JsonResponse({'success': True, 'message': 'Inicio de sesión exitoso'})
            else:
                # Contraseña incorrecta
                return JsonResponse({'success': False, 'message': 'Credenciales incorrectas'})
        except User.DoesNotExist:
            # El usuario no existe en la base de datos
            return JsonResponse({'success': False, 'message': 'El usuario no existe'})
    else:
        return render(request, 'axon/inicio.html')
    

    