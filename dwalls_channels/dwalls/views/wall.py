from django.contrib.auth import get_user_model, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.core.urlresolvers import reverse
from django.core.serializers import serialize
from django.shortcuts import render, redirect
from dwalls.models.post import Post
from dwalls.models.wall import Wall
from dwalls.forms import PostForm

def wall(request, wall='all'):
    posts = serialize('json', Post.objects.filter(wall=Wall.objects.get(route=wall)))
    return render(request, 'dwalls/wall.html', {'wall': wall, 'posts': posts})

