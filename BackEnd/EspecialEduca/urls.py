# urls.py
from django.urls import path
from app.views import AdministradorList, AdministradorDetail, CustomTokenObtainPairView

urlpatterns = [
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/administradores/', AdministradorList.as_view(), name='administrador-list'),
    path('api/administradores/<str:email>/', AdministradorDetail.as_view(), name='administrador-detail'),
]
