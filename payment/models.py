from django.db import models
from orders.models import *
# Create your models here.
    
class esewaPayment(models.Model):
    esewa_order_id = models.CharField(max_length=255)
    amount = models.IntegerField(default=0)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True, blank=True)
    status = models.CharField(max_length=255, choices=[
        ('Pending', 'Pending'), ('Success', 'Success'), ('Failed', 'Failed')], 
        default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.esewa_order_id