from django.db import models
from dwalls.models.wall import Wall
from dwalls.models.account import Account

class Post(models.Model):
    account = models.ForeignKey(
        Account, related_name='post', blank=True, null=True)
    wall = models.ForeignKey(
        Wall, related_name='post')

    title = models.CharField(max_length=300)
    url = models.URLField(blank=True, null=True)
    text = models.TextField(max_length=40000,blank=True, null=True)
    date = models.DateTimeField(auto_now=True, blank=True)
