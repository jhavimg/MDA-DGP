from mongoengine import signals
from .models import TareaPorPasos, PeticionComedor

def eliminar_tarea_de_alumno(sender, document, **kwargs):
    if document.alumnoAsignado:
        alumno = document.alumnoAsignado
        if document.id in alumno.tareas:
            alumno.tareas.remove(document.id)
            alumno.save()

signals.post_delete.connect(eliminar_tarea_de_alumno, sender=TareaPorPasos)
signals.post_delete.connect(eliminar_tarea_de_alumno, sender=PeticionComedor)
