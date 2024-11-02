from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Administrador
from .serializers import AdministradorSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            return Response({
                "success": True,
                "data": serializer.validated_data
            }, status=status.HTTP_200_OK)

        errors = serializer.errors
        error_message = (
            errors.get("invalid_admin", ["El administrador no existe"])[0] if "invalid_admin" in errors else
            errors.get("invalid_password", ["Contraseña incorrecta"])[0]
        )

        return Response({
            "success": False,
            "message": error_message
        }, status=status.HTTP_400_BAD_REQUEST)


class AdministradorList(APIView):
    def get(self, request):
        admins = Administrador.objects.all()
        serializer = AdministradorSerializer(admins, many=True)
        return Response({
            "success": True,
            "data": serializer.data
        })

    def post(self, request):
        serializer = AdministradorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "success": True,
                "data": serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            "success": False,
            "message": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class AdministradorDetail(APIView):
    def get(self, request, email):
        try:
            admin = Administrador.objects.get(email=email)
            serializer = AdministradorSerializer(admin)
            return Response({
                "success": True,
                "data": serializer.data
            })
        except Administrador.DoesNotExist:
            return Response({
                "success": False,
                "message": "El administrador no existe"
            }, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, email):
        try:
            admin = Administrador.objects.get(email=email)
            serializer = AdministradorSerializer(admin, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    "success": True,
                    "data": serializer.data
                })
            return Response({
                "success": False,
                "message": serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
        except Administrador.DoesNotExist:
            return Response({
                "success": False,
                "message": "El administrador no existe"
            }, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, email):
        try:
            admin = Administrador.objects.get(email=email)
            admin.delete()
            return Response({
                "success": True,
                "data": []
            }, status=status.HTTP_204_NO_CONTENT)
        except Administrador.DoesNotExist:
            return Response({
                "success": False,
                "message": "El administrador no existe"
            }, status=status.HTTP_404_NOT_FOUND)