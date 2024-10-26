from django.db import models

class Administrador(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    foto = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.email