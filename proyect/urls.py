from django.urls import path
from . import views


urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('paquetes/', views.paquetes, name='paquetes'),
    path('contacto/', views.contacto, name='contacto'),
    path('ingreso/', views.ingreso, name='ingreso'),
    path('nosotros/', views.nosotros, name='nosotros'),
    path('registro/', views.registro, name='registro'),
]