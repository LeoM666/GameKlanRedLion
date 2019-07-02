from django.db import models


class AboutPoolOfMemory(models.Model):
    id_room = 5
    name_room = models.CharField(max_length=20)
    about_room = models.TextField(max_length=56)
    image_room = models.ImageField(upload_to='pool_of_memory_media')

    def __str__(self):
        return self.name_room
