from django.contrib import admin
from .models import *
# Register your models here.
class PaymentAdmin(admin.ModelAdmin):
    list_display =['esewa_order_id','amount','status','order','created_at']

admin.site.register(esewaPayment,PaymentAdmin)