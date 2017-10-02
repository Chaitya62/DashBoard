from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'login/', views.login, name = 'login'),
	url(r'home/([0-9]+)/$',views.home, name='home'),
	url(r'logout/$',views.logout,name='logout'),
	url(r'home/([0-9]+)/schedule/$',views.schedule, name='schedule'),
	url(r'home/([0-9]+)/rules/$',views.rules, name='rules'),
]