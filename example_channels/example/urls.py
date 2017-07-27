from django.conf.urls import url
from example.views import user_list, log_in, log_out

urlpatterns = [
    url(r'^log_in/$', log_in, name='log_in'),
    url(r'^log_out/$', log_out, name='log_out'),
    url(r'^$', user_list, name='user_list'),
]
