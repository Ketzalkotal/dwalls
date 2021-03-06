# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-04 07:53
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dwalls', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('url', models.URLField(blank=True, null=True)),
                ('text', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Wall',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('route', models.SlugField()),
                ('name', models.CharField(max_length=300)),
                ('description', models.TextField()),
            ],
        ),
        migrations.AddField(
            model_name='subscription',
            name='wall',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post', to='dwalls.Wall'),
        ),
        migrations.AddField(
            model_name='account',
            name='subscription',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='account', to='dwalls.Subscription'),
        ),
    ]
