import datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Administrador
from .serializers import *
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairView(TokenObtainPairView):
    """
    Vista personalizada para obtener un par de tokens JWT.
    """
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
    """
    Vista para listar todos los administradores.
    """
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
    """
    Vista para obtener, actualizar o eliminar un administrador.
    """
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
class AlumnoList(APIView):
    """
    Vista para listar todos los alumnos.
    """
    def get(self, request):
        alumnos = Alumno.objects.all()
        serializer = AlumnoSerializer(alumnos, many=True)
        return Response({
            "success": True,
            "data": serializer.data
        })

    def post(self, request):
        serializer = AlumnoSerializer(data=request.data)
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
class TareaAlumnoView(APIView):
    """
    Vista para obtener las tareas de un alumno.
    """
    def get(self, request, alumno_id):
        try:
            alumno = Alumno.objects.get(id=alumno_id)
        except Alumno.DoesNotExist:
            raise Response({
                "success": False,
                "message": "El alumno no existe"
            }, status=status.HTTP_404_NOT_FOUND)
        
        tareas = alumno.tareas
        serializer = TareaSerializer(tareas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
class TareaUpdateView(APIView):
    """
    Vista para completar una tarea de un alumno.
    """
    def post(self, request, tarea_id, alumno_id):
        try:
            alumno = Alumno.objects.get(id=alumno_id)
        except Alumno.DoesNotExist:
            raise Response({
                "success": False,
                "message": "El alumno no existe"
            }, status=status.HTTP_404_NOT_FOUND)
        
        try:
            tarea = Tarea.objects.get(id=tarea_id)
        except Tarea.DoesNotExist:
            raise Response({
                "success": False,
                "message": "La tarea no existe"
            }, status=status.HTTP_404_NOT_FOUND)
        
        # Eliminar la tarea de la lista de tareas del alumno
        if tarea in alumno.tareas:
            alumno.tareas.remove(tarea)
            alumno.save()
        
        #tarea.estado = 'completada'
        #tarea.save()

        return Response({"message": "Tarea eliminada de la lista del alumno"}, status=status.HTTP_200_OK)
class TareaDetail(APIView):
    """
    Vista para obtener una tarea.
    """
    def get(self, request, tarea_id):
        try:
            tarea = Tarea.objects.get(id=tarea_id)
        except Tarea.DoesNotExist:
            raise Response({
                "success": False,
                "message": "La tarea no existe"
            }, status=status.HTTP_404_NOT_FOUND)
        
        serializer = TareaSerializer(tarea)
        return Response(serializer.data, status=status.HTTP_200_OK)
class TareaList(APIView):
    """
    Vista para listar todas las tareas.
    """
    def get(self, request):
        tareas = Tarea.objects.all()
        serializer = TareaSerializer(tareas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        serializer = TareaSerializer(data=request.data)
        if serializer.is_valid():
            tarea = serializer.save()
            return Response(TareaSerializer(tarea).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class TareasHoyAlumnoView(APIView):
    """
    Vista para obtener las tareas de un alumno que se deben realizar hoy.
    """
    def get(self, request, alumno_id):
        hoy = datetime.now().date()
        try:
            alumno = Alumno.objects.get(id=alumno_id)
        except Alumno.DoesNotExist:
            raise Response({
                "success": False,
                "message": "El alumno no existe"
            }, status=status.HTTP_404_NOT_FOUND)
        
        tareas_de_hoy = [tarea for tarea in alumno.tareas if tarea.fecha.date() == hoy]
        
        serializer = TareaSerializer(tareas_de_hoy, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)