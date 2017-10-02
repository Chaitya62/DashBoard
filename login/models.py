from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Login(models.Model):
	username = models.CharField(max_length=250)
	password = models.CharField(max_length=250)
	github_repo = models.CharField(max_length=300, blank = True)
	wifi_username_1 = models.CharField(max_length=250, default = 'Not Alloted')
	wifi_username_2 = models.CharField(max_length=250, default = 'Not Alloted')
	wifi_password_1 = models.CharField(max_length=250, default = 'Not Alloted')
	wifi_password_2 = models.CharField(max_length=250, default = 'Not Alloted')