# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-04 15:30
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dwalls', '0002_auto_20170804_0753'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subscription',
            name='wall',
        ),
        migrations.RemoveField(
            model_name='account',
            name='subscription',
        ),
        migrations.DeleteModel(
            name='Subscription',
        ),
        migrations.DeleteModel(
            name='Wall',
        ),
    ]
