from django.db import models
from users.models import CustomUsers  
from product.models import Product

# Create your models here.
class Order(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone = models.IntegerField(default=0)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    quantity = models.IntegerField(default=0)
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, null=True, blank=True)   
    orderStatus = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username