from rest_framework import serializers
from datetime import datetime, timedelta

from .models import *

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

    def create(self, validated_data):
        return Accesibilidad(**validated_data).save()
    
    def update(self, instance, validated_data):
        instance.update(**validated_data)
        return instance.reload()

# Serializador para la clase Alumno. Se define un serializador que hereda de la clase Serializer de Django Rest Framework.
class AlumnoSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    email = serializers.EmailField(required=False, max_length=100)
    contraseña = serializers.CharField(write_only=True, max_length=100)
    nickname = serializers.CharField(required=True, max_length=100)
    fechaNacimiento = serializers.DateTimeField(required=True)
    accesibilidad = serializers.ListField(
        child=serializers.PrimaryKeyRelatedField(queryset=Accesibilidad.objects.all()),
        required=False,
    )
    tareas = serializers.ListField(
        child = serializers.PrimaryKeyRelatedField(queryset = Tarea.objects),
        required=False,
    )

    def create(self, validated_data):
        return Alumno(**validated_data).save()

    def update(self, instance, validated_data):
        instance.update(**validated_data)
        return instance.reload()
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['id'] = str(instance.id)  # Convertir ObjectId a string
        rep['accesibilidad'] = [str(acc.id) for acc in instance.accesibilidad]
        rep['tareas'] = [str(task.id) for task in instance.tareas]
        return rep
    
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
    prioridad = serializers.CharField(required=True, max_length=50)
    alumnoAsignado = serializers.PrimaryKeyRelatedField(queryset = Alumno.objects)

    def create(self, validated_data):
        return Tarea(**validated_data).save()
    
    def update(self, instance, validated_data):
        instance.update(**validated_data)
        return instance.reload()
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['id'] = str(instance.id)  # Convertir ObjectId a string
        rep['alumnoAsignado'] = str(instance.alumnoAsignado.id) if instance.alumnoAsignado else None
        return rep
    
# Serializador para tarea por pasos
class TareaPorPasosSerializer(TareaSerializer):
    pasos = PasoSerializer(many=True, required=False)
    idTarea = serializers.CharField(required=True, max_length=100)
    def create(self, validated_data):
        pasos_data = validated_data.pop('pasos', [])
        tarea = TareaPorPasos(**validated_data).save()
        for paso_data in pasos_data:
            tarea.pasos.append(Paso(**paso_data))
        tarea.save()
        return tarea

# Serializador para el menú
class MenuSerializer(serializers.Serializer):
    nombre = serializers.CharField(required=True, max_length=100)
    cantidad = serializers.IntegerField(required=True)
    aula = serializers.CharField(required=True, max_length=50)

# Serializador para la petición de comedor
class PeticionComedorSerializer(TareaSerializer):
    menus = MenuSerializer(many=True, required=True)

    def create(self, validated_data):
        menus_data = validated_data.pop('menus')
        alumno = validated_data.get('alumnoAsignado')
        
        # Asegurarse de que 'tipo' esté presente en validated_data
        if 'tipo' not in validated_data:
            validated_data['tipo'] = "petición comedor"  # Valor predeterminado
        
        peticion_comedor = PeticionComedor(**validated_data).save()
        
        for menu_data in menus_data:
            peticion_comedor.menus.append(Menu(**menu_data))
        peticion_comedor.save()

        if alumno:
            alumno.tareas.append(peticion_comedor.id)  # Agregar el ObjectId de la tarea
            alumno.save()
        
        return peticion_comedor

    def validate(self, data):
        alumno = data.get('alumnoAsignado')
        fecha = data.get('fecha').date()  # Obtenemos solo la parte de la fecha
        
        start_of_day = datetime.combine(fecha, datetime.min.time())
        end_of_day = datetime.combine(fecha, datetime.max.time())
        
        if PeticionComedor.objects.filter(alumnoAsignado=alumno, fecha__gte=start_of_day, fecha__lte=end_of_day).count() > 0:
            raise serializers.ValidationError("Ya existe una petición de comedor para este alumno en la fecha seleccionada.")
        
        return data
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        # Convertir el ObjectId a string
        rep['id'] = str(instance.id)
        rep['menus'] = [
            {
                'nombre': menu.nombre,
                'cantidad': menu.cantidad,
                'aula': menu.aula
            } for menu in instance.menus
        ]
        rep['alumnoAsignado'] = str(instance.alumnoAsignado.id) if instance.alumnoAsignado else None
        return rep
# Seliarizador para los materiales
class MaterialSerializer(serializers.Serializer):
    nombre = serializers.CharField(required=True, max_length=100)
    cantidad = serializers.IntegerField(required=True)

class PeticionMaterialSerializer(TareaSerializer):
    materiales = MaterialSerializer(many=True, required=True)

    def create(self, validated_data):
        materiales_data = validated_data.pop('materiales')
        peticion_material = PeticionMaterial(**validated_data).save()
        for material_data in materiales_data:
            peticion_material.materiales.append(Material(**material_data))
        peticion_material.save()

        return peticion_material

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['materiales'] = [
            {
                'nombre': material.nombre,
                'cantidad': material.cantidad
            } for material in instance.materiales
        ]
        return rep