# urls.py
from django.urls import path
from app.views import *

urlpatterns = [
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/administradores/', AdministradorList.as_view(), name='administrador-list'),
    path('api/administradores/<str:email>/', AdministradorDetail.as_view(), name='administrador-detail'),
    path('api/alumnos/', AlumnoList.as_view(), name='alumno-list'),
    path('api/alumnos/<str:alumno_id>/tareas/', TareaAlumnoView.as_view(), name='alumno-lista-tareas'),
    path('api/alumnos/<str:tarea_id>/tareas/completar', TareaUpdateView.as_view(), name='tarea-completar'),
    path('api/alumnos/<str:alumno_id>/tareas/hoy/', TareasHoyAlumnoView.as_view(), name='tareas-hoy-alumno'),
    path('api/tareas/<str:tarea_id>/', TareaDetail.as_view(), name='tarea-detail'),
    path('api/tareas/', TareaList.as_view(), name='tarea-list'),
    path('api/peticiones_comedor/', PeticionComedorCreateView.as_view(), name='peticion-comedor-create'),
    path('api/tareas_por_pasos/', TareaPorPasosCreateView.as_view(), name='tarea-por-pasos-create'),
]
