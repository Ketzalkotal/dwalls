from django.conf.urls import url
from dwalls.views.session import log_in, log_out, sign_up
from dwalls.views.wall import wall
from dwalls.views.post import post

urlpatterns = [
    url(r'^log_in/$', log_in, name='log_in'),
    url(r'^log_out/$', log_out, name='log_out'),
    url(r'^sign_up/$', sign_up, name='sign_up'),
    url(r'^w/$', wall, name='wall'),
    url(r'^w/(?P<wall>.*)/post/$', post, name='post'),
    url(r'^w/(?P<wall>.*)/$', wall, name='wall'),
    url(r'^$', wall),
]

