from django.db import models


# Create your models here.

class AboutDungeon(models.Model):
    id_room = 6
    name_room = models.CharField(max_length=20)
    about_room = models.TextField(max_length=56)
    image_room = models.ImageField(upload_to='dungeon_media')

    def __str__(self):
        return self.name_room
