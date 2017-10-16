from django.contrib.auth import get_user_model, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.core.urlresolvers import reverse
from django.core.serializers import serialize
from django.shortcuts import render, redirect
from dwalls.models.post import Post
from dwalls.models.wall import Wall
from dwalls.forms import PostForm

def post(request, wall='all'):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            if not request.user.is_anonymous():
                post.account = request.user.account
            try:
                realWall = Wall.objects.get(route=wall)
            except:
                realWall = Wall(route=wall, name=wall, description='')
                realWall.save()
            post.wall = realWall
            post.save()
            return redirect('/w/'+wall)
    else:
        form = PostForm()
    return render(request, 'dwalls/post.html', {'wall': wall, 'form': form})

