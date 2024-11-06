from rest_framework import serializers
from .documents import *

class AdministradorSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(required=True, max_length=100)
    email = serializers.EmailField(required=False, max_length=100)
    contraseña = serializers.CharField(write_only=True, max_length=100)
    foto = serializers.ImageField(required=False)

    def create(self, validated_data):
        return Administrador(**validated_data).save()

    def update(self, instance, validated_data):
        instance.update(**validated_data)
        return instance.reload()

class CustomTokenObtainPairSerializer(serializers.Serializer):
    email = serializers.EmailField()
    contraseña = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get("email")
        contraseña = data.get("contraseña")

        try:
            admin = Administrador.objects.get(email=email)
        except Administrador.DoesNotExist:
            raise serializers.ValidationError("El administrador no existe", code="invalid_admin")

        if contraseña != admin.contraseña:
            raise serializers.ValidationError("Contraseña incorrecta", code="invalid_password")

        from rest_framework_simplejwt.tokens import RefreshToken
        refresh = RefreshToken.for_user(admin)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
class AccesibilidadSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(required=True, max_length=150)
    descripcion = serializers.CharField(required=True, max_length=500)

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
class TareaSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(required=True, max_length=100)
    descripcion = serializers.CharField(required=True, max_length=500)
    estado = serializers.ChoiceField(choices=Tarea.ESTADOS, default='pendiente')
    fecha = serializers.DateTimeField(required=True)
    pasos = serializers.ListField(child=serializers.DictField())
    alumnos = serializers.ListField(
        child=serializers.PrimaryKeyRelatedField(queryset=Alumno.objects.all())
    )

def create(self, validated_data):
        return Tarea(**validated_data).save()