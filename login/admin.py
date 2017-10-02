from django.contrib import admin

from .models import Login, Schedule, Announcement

admin.site.register(Login)
admin.site.register(Schedule)
admin.site.register(Announcement)