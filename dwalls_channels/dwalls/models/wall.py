from django.db import models

class Wall(models.Model):
    route = models.SlugField(unique=True)
    name = models.CharField(max_length=300, unique=True)
    description = models.TextField()
