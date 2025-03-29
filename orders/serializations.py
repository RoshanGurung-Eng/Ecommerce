from rest_framework import serializers
from .models import *

class OrderSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), many=True)
    user = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = Order
        fields = ['id','name', 'address', 'phone', 
                  'product', 'quantity', 'user', 'orderStatus', 'created_at']
        read_only_fields = ['orderStatus', 'created_at']
    
    def create (self, validated_data):
        request = self.context.get('request')
        validated_data['user'] = request.user
        return super().create(validated_data)