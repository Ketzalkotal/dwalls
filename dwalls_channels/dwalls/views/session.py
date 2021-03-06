from django.contrib.auth import get_user_model, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.core.urlresolvers import reverse
from django.core.serializers import serialize
from django.shortcuts import render, redirect
from dwalls.models.post import Post
from dwalls.models.wall import Wall
from dwalls.forms import PostForm

User = get_user_model()

def log_in(request):
    form = AuthenticationForm()
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            login(request, form.get_user())
            return redirect(reverse('dwalls:user_list'))
        else:
            print(form.errors)
    return render(request, 'dwalls/log_in.html', {'form': form})

def log_out(request):
    logout(request)
    return redirect(reverse('dwalls:log_in'))

def sign_up(request):
    form = UserCreationForm()
    if request.method == 'POST':
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse('dwalls:log_in'))
        else:
            print(form.errors)
    return render(request, 'dwalls/sign_up.html', {'form': form})

