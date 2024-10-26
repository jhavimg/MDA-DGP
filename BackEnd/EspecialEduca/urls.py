from django.contrib import admin
from django.urls import path
from app.views import CustomTokenObtainPairView, AdministradorList, AdministradorDetail
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/admin/', AdministradorList.as_view(), name='administrador_list'),
    path('api/admin/<str:email>/', AdministradorDetail.as_view(), name='administrador_detail'),
]