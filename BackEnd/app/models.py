from mongoengine import Document, EmbeddedDocument, StringField, DateTimeField, EmailField, BooleanField, EmbeddedDocumentField, ListField, ReferenceField, ImageField, IntField

# Clase base Usuario con herencia habilitada
class Usuario(Document):
    meta = {'allow_inheritance': True}  # Permite herencia en mongoengine
    email = EmailField(required=False, unique=True, max_length=100)
    contraseña = StringField(required=True, max_length=100)
    foto = ImageField()

# Clase para la colección de Administrador que hereda de Usuario
class Administrador(Usuario):
    nombre = StringField(required=True, max_length=150)

# Clase para la coleccion de Profesor que hereda de Usuario
class Profesor(Usuario):
    nombre = StringField(required=True, max_length=150)
    aula = StringField(max_length=50)

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
    audio = ListField(StringField())  
    video = ListField(StringField())  

# Clase base para Tarea con herencia
class Tarea(Document):
    meta = {'allow_inheritance': True}
    nombre = StringField(required=True, max_length=100)
    descripcion = StringField(required=True, max_length=500)

    ESTADOS = ('pendiente', 'en progreso', 'completada')
    estado = StringField(choices=ESTADOS, default='pendiente')
    prioridad = StringField(required=True, max_length=50)
    fecha = DateTimeField(required=True)
    alumnoAsignado = ReferenceField(Alumno, required=False, null=True)
    tipo = StringField(required=True, max_length=100)

# Clase para Tarea por Pasos que hereda de Tarea
class TareaPorPasos(Tarea):
    pasos = ListField(EmbeddedDocumentField(Paso), required=False)

# Clase para los elementos de Material
class Material(EmbeddedDocument):
    nombre = StringField(required=True, max_length=100)
    cantidad = IntField(required=True)

# Clase para Petición de Material que hereda de Tare
class PeticionMaterial(Tarea):
    materiales = ListField(EmbeddedDocumentField(Material))

# Clase para los elementos de Menú
class Menu(EmbeddedDocument):
    nombre = StringField(required=True, max_length=100)
    cantidad = IntField(required=True)
    aula = StringField(required=True, max_length=50)

# Clase para Petición de Comedor que hereda de Tarea
class PeticionComedor(Tarea):
    menus = ListField(EmbeddedDocumentField(Menu))