from django.db import models
from dwalls.models.wall import Wall
from dwalls.models.account import Account

class Subscription(models.Model):
    wall = models.ForeignKey(
        Wall, related_name='subscription')
    account = models.ForeignKey(
        Account, related_name='subscription')

    title = models.CharField(max_length=300)
    url = models.URLField(blank=True, null=True)
    text = models.TextField(blank=True, null=True)
