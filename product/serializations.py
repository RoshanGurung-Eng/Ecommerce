from rest_framework import serializers
from .models import *

class ProductCategorySerialization(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        # fields = "__all__"
        fields = ['id', 'category_name','category_img']

class ProductSerialization(serializers.ModelSerializer):
    class Meta:
       model = Product
       fields = ['id','title','description','category','price','stock']

class ProductCategoryListSerialization(serializers.ModelSerializer):
    product = serializers.SerializerMethodField()
    class Meta:
        model = ProductCategory
        fields= ['id','category_name','category_img','product']

    def get_product(self, obj):
        product = Product.objects.filter(category = obj)
        return ProductSerialization(product, many=True).data