from rest_framework import serializers
from .documents import *

"""En este archivo se definen los serializadores que se utilizarán para la serialización y deserialización de los datos que se envían y reciben en las peticiones HTTP,
es decir, se definen las clases que se encargan de convertir los datos en objetos de Python y viceversa."""

# Serializador para la clase Administrador. Se define un serializador que hereda de la clase Serializer de Django Rest Framework.
class AdministradorSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(required=True, max_length=100)
    apellidos = serializers.CharField(required=True, max_length=150)
    email = serializers.EmailField(required=False, max_length=100)
    contraseña = serializers.CharField(write_only=True, max_length=100)
    foto = serializers.ImageField(required=False)

    def create(self, validated_data):
        return Administrador(**validated_data).save()

    def update(self, instance, validated_data):
        instance.update(**validated_data)
        return instance.reload()

# Serializador para la clase Profesor. Se define un serializador que hereda de la clase Serializer de Django Rest Framework.
class CustomTokenObtainPairSerializer(serializers.Serializer):
    email = serializers.EmailField()
    contraseña = serializers.CharField(write_only=True)

    # Método para validar los datos del serializador
    def validate(self, data):
        email = data.get("email")
        contraseña = data.get("contraseña")

        try:
            admin = Administrador.objects.get(email=email)
        except Administrador.DoesNotExist:
            raise serializers.ValidationError("El administrador no existe", code="invalid_admin")

        if contraseña != admin.contraseña:
            raise serializers.ValidationError("Contraseña incorrecta", code="invalid_password")

        # Generar el token de acceso
        from rest_framework_simplejwt.tokens import RefreshToken
        refresh = RefreshToken.for_user(admin)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
    
# Serializador para la clase Profesor. Se define un serializador que hereda de la clase Serializer de Django Rest Framework.
class AccesibilidadSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(required=True, max_length=150)
    descripcion = serializers.CharField(required=True, max_length=500)

# Serializador para la clase Alumno. Se define un serializador que hereda de la clase Serializer de Django Rest Framework.
class AlumnoSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    email = serializers.EmailField(required=True, max_length=100)
    contraseña = serializers.CharField(write_only=True, max_length=100)
    nickname = serializers.CharField(required=True, max_length=100)
    fechaNacimiento = serializers.DateTimeField(required=True)
    accesibilidad = serializers.ListField(
        child=serializers.PrimaryKeyRelatedField(queryset=Accesibilidad.objects.all())
    )

    def create(self, validated_data):
        return Alumno(**validated_data).save()

    def update(self, instance, validated_data):
        instance.update(**validated_data)
        return instance.reload()
    
# Serializador para la clase Paso. Se define un serializador que hereda de la clase Serializer de Django Rest Framework.
class PasoSerializer(serializers.Serializer):
    nombre = serializers.CharField(required=True, max_length=100)
    descripcion = serializers.CharField(required=False, max_length=500)
    imagenes = serializers.ListField(child=serializers.CharField(), required=False)
    audio = serializers.CharField(required=False)
    video = serializers.CharField(required=False)

# Serializador para la clase Tarea. Se define un serializador que hereda de la clase Serializer de Django Rest Framework.
class TareaSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(required=True, max_length=100)
    descripcion = serializers.CharField(required=True, max_length=500)
    estado = serializers.ChoiceField(choices=Tarea.ESTADOS, default='pendiente')
    fecha = serializers.DateTimeField(required=True)
    pasos = PasoSerializer(many=True, required=False)
    idTarea = serializers.CharField(required=True, max_length=100)
    def create(self, validated_data):
        pasos_data = validated_data.pop('pasos', [])
        tarea = Tarea(**validated_data).save()
        
        for paso_data in pasos_data:
            paso = Paso(**paso_data)
            tarea.pasos.append(paso)
        tarea.save()
        return tarea

def create(self, validated_data):
        return Tarea(**validated_data).save()