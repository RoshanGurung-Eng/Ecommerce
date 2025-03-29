from django.contrib import admin
from .models import *
# Register your models here.
class ContactDetails(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'phone',
    'message', 'created_at']

admin.site.register(Contact, ContactDetails)