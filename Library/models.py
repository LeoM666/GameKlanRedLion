from django.db import models


# Create your models here.

class AboutLibrary(models.Model):
    id_room = 4
    name_room = models.CharField(max_length=20)
    about_room = models.TextField(max_length=56)
    image_room = models.ImageField(upload_to='library_media')

    def __str__(self):
        return self.name_room
