# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-28 05:21
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('example', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='loggedinuser',
            old_name='logged_in_user',
            new_name='user',
        ),
    ]