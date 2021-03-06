# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-07 07:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dwalls', '0005_post_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wall',
            name='name',
            field=models.CharField(max_length=300, unique=True),
        ),
        migrations.AlterField(
            model_name='wall',
            name='route',
            field=models.SlugField(unique=True),
        ),
    ]
