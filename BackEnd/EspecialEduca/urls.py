# urls.py
from django.urls import path
from app.views import *

urlpatterns = [
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/administradores/', AdministradorList.as_view(), name='administrador-list'),
    path('api/administradores/<str:email>/', AdministradorDetail.as_view(), name='administrador-detail'),
    path('api/alumnos/', AlumnoList.as_view(), name='alumno-list'), # Sin historia de usuario (Crear alumnos y mostrar lista)
    path('api/alumnos/<str:alumno_id>/tareas/', TareaCreateView.as_view(), name='tarea-create'), # Historia de usuario 1
    path('api/tareas/<str:tarea_id>/completar/', TareaUpdateView.as_view(), name='tarea-completar'), # Historia de usuario 5
    path('api/tareas/<str:tarea_id>/', TareaDetail.as_view(), name='tarea-detail'), # Historia de usuario 9
]
