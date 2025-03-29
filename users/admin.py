from django.contrib import admin
from .models import *

class CustomUsersAdmin(admin.ModelAdmin):
    list_display = ['username','email']

admin.site.register(CustomUsers,CustomUsersAdmin)

