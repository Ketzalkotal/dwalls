from django.conf import settings
from django.db import models

class Wall(models.Model):
    # walls have subscibers
    # users should have a subscription list
    # maybe walls have metadata, they are related to posts
    # which can be text posts or links
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, related_name='logged_in_user')
