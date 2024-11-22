import datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Administrador
from .serializers import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.parsers import MultiPartParser, FormParser
from drf_spectacular.utils import extend_schema


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

@extend_schema(
    summary="Listar y crear administradores.",
    description="Vista para listar todos los administradores y crear nuevos.",
    responses={200: dict, 201: dict, 400: dict},
)
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

@extend_schema(
    summary="Obtener, actualizar o eliminar un administrador.",
    description="Vista para obtener, actualizar o eliminar un administrador específico.",
    responses={200: dict, 204: dict, 404: dict, 400: dict},
)
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
        

@extend_schema(
    summary="Listar y crear alumnos.",
    description="Vista para listar todos los alumnos y crear nuevos.",
    responses={200: dict, 201: dict, 400: dict},
)
class AlumnoDetail(APIView):
    """
    Vista para obtener, actualizar o eliminar un alumno.
    """
    def get(self, request, alumno_id):
        try:
            alumno = Alumno.objects.get(id=alumno_id)
            serializer = AlumnoSerializer(alumno)
            return Response({
                "success": True,
                "data": serializer.data
            })
        except Alumno.DoesNotExist:
            return Response({
                "success": False,
                "message": "El alumno no existe"
            }, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, alumno_id):
        try:
            alumno = Alumno.objects.get(id=alumno_id)
            serializer = AlumnoSerializer(alumno, data=request.data, partial=True)
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
        except Alumno.DoesNotExist:
            return Response({
                "success": False,
                "message": "El alumno no existe"
            }, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, alumno_id):
        try:
            alumno = Alumno.objects.get(id=alumno_id)
            alumno.delete()
            return Response({
                "success": True,
                "data": []
            }, status=status.HTTP_204_NO_CONTENT)
        except Alumno.DoesNotExist:
            return Response({
                "success": False,
                "message": "El alumno no existe"
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
    

@extend_schema(
    summary="Obtener y crear tareas de un alumno.",
    description="Vista para obtener las tareas de un alumno y crear una nueva tarea para ese alumno.",
    responses={200: dict, 201: dict, 404: dict, 400: dict},
)
class TareaAlumnoView(APIView):
    """
    Vista para obtener las tareas de un alumno y crear una tarea para ese alumno.
    """
    parser_classes = (MultiPartParser, FormParser)
    def get(self, request, alumno_id):
        try:
            alumno = Alumno.objects.get(id=alumno_id)
        except Alumno.DoesNotExist:
            return Response({"success": False, "message": "El alumno no existe"}, status=status.HTTP_404_NOT_FOUND)
        
        tareas_serializadas = []
        for tarea in alumno.tareas:
            if isinstance(tarea, PeticionComedor):
                serializer = PeticionComedorSerializer(tarea)
            elif isinstance(tarea, TareaPorPasos):
                serializer = TareaPorPasosSerializer(tarea)
            else:
                serializer = TareaSerializer(tarea)
            tareas_serializadas.append(serializer.data)

        return Response({"success": True, "data": tareas_serializadas}, status=status.HTTP_200_OK)

    def post(self, request, alumno_id):
        tipo_tarea = request.data.get('tipo', None)
        if tipo_tarea == 'peticion_comedor':
            serializer = PeticionComedorSerializer(data=request.data)
        elif tipo_tarea == 'tarea_por_pasos':
            serializer = TareaPorPasosSerializer(data=request.data)
        else:
            serializer = TareaSerializer(data=request.data)
        
        if serializer.is_valid():
            tarea = serializer.save(alumnoAsignado=Alumno.objects.get(id=alumno_id))
            Alumno.objects(id=alumno_id).update_one(push__tareas=tarea)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@extend_schema(
    summary="Completar una tarea de un alumno.",
    description="Vista para completar una tarea de un alumno.",
    responses={200: dict, 404: dict},
)
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
    

@extend_schema(
    summary="Ver información de una tarea.",
    description="Ver información detallada de una tarea.",
    responses={200: dict, 400: dict},
)
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
    

@extend_schema(
    summary="Listar y crear tareas.",
    description="Vista para listar todas las tareas y crear nuevas.",
    responses={200: dict, 201: dict, 400: dict},
)
class TareaList(APIView):
    """
    Vista para listar todas las tareas.
    """
    def get(self, request):
        # Recuperar todas las tareas, incluidas las subclases
        tareas = Tarea.objects.all()
        tareas_serializadas = []
        
        # Serializar cada tarea según su tipo
        for tarea in tareas:
            if isinstance(tarea, PeticionComedor):  # Si es una PeticionComedor
                serializer = PeticionComedorSerializer(tarea)
            elif isinstance(tarea, TareaPorPasos):  # Si es una TareaPorPasos
                serializer = TareaPorPasosSerializer(tarea)
            else:  # Si es una Tarea genérica
                serializer = TareaSerializer(tarea)
            tareas_serializadas.append(serializer.data)

        return Response({
            "success": True,
            "data": tareas_serializadas
        }, status=status.HTTP_200_OK)
    def post(self, request):
        serializer = TareaSerializer(data=request.data)
        if serializer.is_valid():
            tarea = serializer.save()
            return Response(TareaSerializer(tarea).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@extend_schema(
    summary="Obtener las tareas de hoy de un alumno.",
    description="Vista para obtener las tareas de un alumno que se deben realizar hoy.",
    responses={200: dict, 404: dict},
)
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


# Vista para petición de comedor
@extend_schema(
    summary="Crear una petición de comedor.",
    description="Vista para crear una nueva petición de comedor.",
    responses={201: dict, 400: dict},
)
class PeticionComedorCreateView(APIView):
    def post(self, request):
        serializer = PeticionComedorSerializer(data=request.data)
        if serializer.is_valid():
            peticion_comedor = serializer.save()
            return Response({
                "success": True,
                "data": PeticionComedorSerializer(peticion_comedor).data
            }, status=status.HTTP_201_CREATED)
        return Response({
            "success": False,
            "message": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

# Vista para petición de material
@extend_schema(
    summary="Crear una petición de material.",
    description="Vista para crear una nueva petición de material.",
    responses={201: dict, 400: dict},
)
class PeticionMaterialCreateView(APIView):
    def post(self, request):
        serializer = PeticionMaterialSerializer(data=request.data)
        if serializer.is_valid():
            peticion_material = serializer.save()
            return Response({
                "success": True,
                "data": PeticionMaterialSerializer(peticion_material).data
            }, status=status.HTTP_201_CREATED)
        return Response({
            "success": False,
            "message": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
# Obtener las accesibilidades y agregar nuevas
@extend_schema(
    summary="Listar y crear accesibilidades.",
    description="Vista para listar todas las accesibilidades y crear nuevas.",
    responses={200: dict, 201: dict, 400: dict},
)
class AccesibilidadListCreateView(APIView):
    def get(self, request):
        accesibilidades = Accesibilidad.objects.all()
        serializer = AccesibilidadSerializer(accesibilidades, many=True)
        return Response({
            "success": True,
            "data": serializer.data
        })

    def post(self, request):
        serializer = AccesibilidadSerializer(data=request.data)
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
# Vista para la lista de menús (Comandas)
@extend_schema(
    summary="Obtener y actualizar el menú de una petición de comedor.",
    description="Vista para obtener y actualizar el menú (comandas) de una petición de comedor.",
    responses={200: dict, 404: dict, 400: dict},
)
class PeticionComedorMenuView(APIView):
    def get(self, request, peticion_id):
        try:
            peticion = PeticionComedor.objects.get(id=peticion_id)
        except PeticionComedor.DoesNotExist:
            return Response({
                "success": False,
                "message": "La petición de comedor no existe"
            }, status=status.HTTP_404_NOT_FOUND)
        
        serializer = PeticionComedorSerializer(peticion)
        return Response({
            "success": True,
            "data": serializer.data
        })

    def put(self, request, peticion_id):
        try:
            peticion = PeticionComedor.objects.get(id=peticion_id)
        except PeticionComedor.DoesNotExist:
            return Response({
                "success": False,
                "message": "La petición de comedor no existe"
            }, status=status.HTTP_404_NOT_FOUND)

        serializer = PeticionComedorSerializer(peticion, data=request.data, partial=True)
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
@extend_schema(
    summary="Obtener y actualizar las accesibilidades de un alumno.",
    description="Vista para obtener y actualizar las accesibilidades de un alumno.",
    responses={200: dict, 404: dict, 400: dict},
)
class AlumnoAccesibilidadUpdateView(APIView):
    def get(self, request, alumno_id):
        try:
            alumno = Alumno.objects.get(id=alumno_id)
        except Alumno.DoesNotExist:
            return Response({
                "success": False,
                "message": "El alumno no existe"
            }, status=status.HTTP_404_NOT_FOUND)

        serializer = AccesibilidadSerializer(alumno.accesibilidad, many=True)
        return Response({
            "success": True,
            "data": serializer.data
        })
    def put(self, request, alumno_id):
        try:
            alumno = Alumno.objects.get(id=alumno_id)
        except Alumno.DoesNotExist:
            return Response(
                {
                    "success": False,
                    "message": "El alumno no existe"
                },
                status=status.HTTP_404_NOT_FOUND
            )

        accesibilidades_ids = request.data.get('accesibilidades_ids', [])
        # Validar si las accesibilidades existen
        accesibilidades = Accesibilidad.objects.filter(id__in=accesibilidades_ids)
        if len(accesibilidades) != len(accesibilidades_ids):
            return Response(
                {
                    "success": False,
                    "message": "Una o más accesibilidades no existen"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        # Actualizar las accesibilidades del alumno
        alumno.accesibilidad.set(accesibilidades)
        alumno.save()

        return Response(
            {
                "success": True,
                "data": AlumnoSerializer(alumno).data
            }
        )
    def patch(self, request, alumno_id):
        try:
            alumno = Alumno.objects.get(id=alumno_id)
        except Alumno.DoesNotExist:
            return Response(
                {
                    "success": False,
                    "message": "El alumno no existe"
                },
                status=status.HTTP_404_NOT_FOUND
            )

        agregar = request.data.get('agregar', [])
        quitar = request.data.get('quitar', [])

        accesibilidades_agregar = Accesibilidad.objects.filter(id__in=agregar)
        if len(accesibilidades_agregar) != len(agregar):
            return Response(
                {
                    "success": False,
                    "message": "Una o más accesibilidades para agregar no existen"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        accesibilidades_quitar = Accesibilidad.objects.filter(id__in=quitar)
        if len(accesibilidades_quitar) != len(quitar):
            return Response(
                {
                    "success": False,
                    "message": "Una o más accesibilidades para quitar no existen"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        alumno.accesibilidad.add(*accesibilidades_agregar)
        alumno.accesibilidad.remove(*accesibilidades_quitar)
        alumno.save()
        return Response(
            {
                "success": True,
                "data": AlumnoSerializer(alumno).data
            }
        )