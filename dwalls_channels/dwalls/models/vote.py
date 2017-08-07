from django.db import models
from dwalls.models.wall import Wall
from dwalls.models.account import Account

class Vote(models.Model):
    VOTE_TYPE = (
        ('L', 'LIKE'),
        ('D', 'DISLIKE')
    )
    account = models.ForeignKey(
        Account, related_name='vote', blank=True, null=True)
    wall = models.ForeignKey(
        Wall, related_name='vote')
    vote = models.CharField(
        max_len=1,
        choices=VOTE_TYPE)

    date = models.DateTimeField(auto_now_add=True, blank=True)
