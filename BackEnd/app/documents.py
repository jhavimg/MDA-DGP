from mongoengine import Document, EmbeddedDocument, StringField, DateTimeField, EmailField, BooleanField, EmbeddedDocumentField, ListField, ReferenceField, ImageField

#Este archivo contiene las clases que representan los documentos de la base de datos de MongoDB.
class Usuario(Document):
    meta = {'allow_inheritance': True}
    email = EmailField(required=True, unique=False, max_length=100)
    contraseña = StringField(required=True, max_length=100)
    foto = ImageField()

class Administrador(Usuario):
    nombre = StringField(required=True, max_length=100)
    apellidos = StringField(required=True, max_length=150)

class Accesibilidad(Document):
    nombre = StringField(required=True, max_length=150)
    descripcion = StringField(required=True, max_length=500)

class Alumno(Usuario):
    nickname = StringField(required=True, max_length=100)
    fechaNacimiento = DateTimeField(required=True)
    accesibilidad = ListField(ReferenceField(Accesibilidad))
    tareas = ListField(ReferenceField('Tarea'))

class Paso(EmbeddedDocument):
    nombre = StringField(required=True, max_length=100)
    descripcion = StringField(max_length=500)
    imagenes = ListField(StringField())
    audio = StringField()
    video = StringField()

class Tarea(Document):
    nombre = StringField(required=True, max_length=100)
    descripcion = StringField(required=True, max_length=500)
    ESTADOS = ('pendiente', 'en progreso', 'completada')
    estado = StringField(choices=ESTADOS, default='pendiente')
    completada = BooleanField(default=False)
    fecha = DateTimeField(required=True)
    pasos = ListField(EmbeddedDocumentField(Paso))
    idTarea = StringField(required=True, max_length=100)