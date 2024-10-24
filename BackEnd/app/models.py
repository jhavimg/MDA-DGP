from mongoengine import Document, StringField, DateTimeField, DictField, EmailField

class Administrador(Document):
    name = StringField(required=True, max_length=100)
    email = EmailField(required=True, max_length=100)
    password = StringField(required=True, max_length=100)
    foto = StringField(required=True, max_length=100)