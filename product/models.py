from django.db import models

class ProductCategory(models.Model):
    category_name = models.CharField(max_length=255)  
    category_img = models.ImageField(upload_to="category/", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.category_name} and {self.created_at}"


class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(ProductCategory,on_delete=models.CASCADE,null=True,blank=True)
    product_img = models.ImageField(upload_to="product/",null=True,blank=True)
    price = models.IntegerField(default=0)
    stock = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} and {self.price}"