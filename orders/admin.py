from django.contrib import admin
from .models import *

# Register your models here.
class OrderAdmin(admin.ModelAdmin):
    list_display =['name','address','phone','product','quantity','user','orderStatus','created_at']
    search_fields = ['name','product','orderStatus']

admin.site.register(Order,OrderAdmin)