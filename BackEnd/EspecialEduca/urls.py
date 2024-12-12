# urls.py
from django.urls import path
from app.views import *
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

urlpatterns = [
    path('api/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/administradores/', AdministradorList.as_view(), name='administrador-list'),
    path('api/administradores/<str:email>/', AdministradorDetail.as_view(), name='administrador-detail'),
    path('api/alumnos/', AlumnoList.as_view(), name='alumno-list'),
    path('api/alumnos/<str:alumno_id>/', AlumnoDetail.as_view(), name='alumno-detail'),
    path('api/alumnos/<str:alumno_id>/tareas/', TareaAlumnoView.as_view(), name='alumno-lista-tareas'),
    path('api/alumnos/<str:alumno_id>/tareas/hoy/', TareasHoyAlumnoView.as_view(), name='tareas-hoy-alumno'),
    path('api/tareas/<str:tarea_id>/', TareaDetail.as_view(), name='tarea-detail'),
    path('api/tareas/', TareaList.as_view(), name='tarea-list'),
    path('api/tareas/<str:tarea_id>/modificar/', TareaUpdateView.as_view(), name='tarea-modificar'),
    path('api/peticiones_comedor/', PeticionComedorCreateView.as_view(), name='peticion-comedor-create'),
    path('api/alumnos/<str:alumno_id>/accesibilidades/', AlumnoAccesibilidadUpdateView.as_view(), name='alumno-accesibilidad'),
    path('api/peticiones_material/', PeticionMaterialCreateView.as_view(), name='peticion-material-create'),
    path('api/accesibilidades/', AccesibilidadListCreateView.as_view(), name='accesibilidad-list-create'),
    path('api/accesibilidades/<str:accesibilidad_id>/', AccesibilidadDetailView.as_view(), name='accesibilidad-detail'),
    path('api/peticiones_comedor/<str:peticion_id>/menus/', PeticionComedorMenuView.as_view(), name='peticion-comedor-menus'),
    path('api/tareas_por_pasos/', TareaPorPasosCreateView.as_view(), name='tarea-por-pasos-create'),
    path('api/tareas/<str:tarea_id>/eliminar/', TareaDeleteView.as_view(), name='tarea-delete'),
    path('api/peticiones_comedor/<str:peticion_id>/menus/', PeticionComedorMenuView.as_view(), name='peticion-comedor-menus'),
    path('api/admin/login/', AdministradorLoginView.as_view(), name='admin-login'),
]
