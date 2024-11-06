from mongoengine import Document, EmbeddedDocument, StringField, DateTimeField, EmailField, BooleanField, EmbeddedDocumentField, ListField, ReferenceField, ImageField

# Clase base Usuario con herencia habilitada
class Usuario(Document):
    meta = {'allow_inheritance': True}  # Permite herencia en mongoengine
    email = EmailField(required=False, unique=True, max_length=100)
    contraseña = StringField(required=True, max_length=100)
    foto = ImageField()

# Clase para la colección de Administrador que hereda de Usuario
class Administrador(Usuario):
    nombre = StringField(required=True, max_length=100)
    apellidos = StringField(required=True, max_length=150)

# Clase para la colección de Accesibilidad como documento independiente
class Accesibilidad(Document):
    nombre = StringField(required=True, max_length=150)
    descripcion = StringField(required=True, max_length=500)

# Clase para la colección de Alumno que hereda de Usuario
class Alumno(Usuario):
    nickname = StringField(required=True, max_length=100)
    fechaNacimiento = DateTimeField(required=True)
    accesibilidad = ListField(ReferenceField(Accesibilidad))
    tareas = ListField(ReferenceField('Tarea'))

# Clase para los pasos de una tarea (documento embebido)
class Paso(EmbeddedDocument):
    nombre = StringField(required=True, max_length=100)
    descripcion = StringField(max_length=500)
    imagenes = ListField(StringField()) 
    audio = StringField()  
    video = StringField()  

# Clase para la colección de Tarea, que contiene varios pasos
class Tarea(Document):
    nombre = StringField(required=True, max_length=100)
    descripcion = StringField(required=True, max_length=500)
    
    ESTADOS = ('pendiente', 'en progreso', 'completada')
    estado = StringField(choices=ESTADOS, default='pendiente')

    completada = BooleanField(default=False)
    fecha = DateTimeField(required=True)
    pasos = ListField(EmbeddedDocumentField(Paso)) 
