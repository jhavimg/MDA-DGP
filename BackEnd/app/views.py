from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Administrador
from .serializers import AdministradorSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class AdministradorList(APIView):
    def get(self, request):
        admins = Administrador.objects.all()
        serializer = AdministradorSerializer(admins, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AdministradorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AdministradorDetail(APIView):
    def get(self, request, email):
        try:
            admin = Administrador.objects.get(email=email)
        except Administrador.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = AdministradorSerializer(admin)
        return Response(serializer.data)

    def put(self, request, email):
        try:
            admin = Administrador.objects.get(email=email)
        except Administrador.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = AdministradorSerializer(admin, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, email):
        try:
            admin = Administrador.objects.get(email=email)
        except Administrador.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        admin.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)