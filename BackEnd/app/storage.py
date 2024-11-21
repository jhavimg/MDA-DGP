from django.core.files.storage import FileSystemStorage
from django.conf import settings

class StaticStorage(FileSystemStorage):
    def __init__(self, *args, **kwargs):
        super(StaticStorage, self).__init__(*args, **kwargs)
        self.location = settings.STATIC_ROOT