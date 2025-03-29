from rest_framework import serializers
from .models import *

class EsewaPaymentSerializer(serializers.ModelSerializer):
    order_id = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all(), many=True)
    esewa_order_id = serializers.CharField(max_length=255)
    amount = serializers.IntegerField()

    class Meta:
        model = esewaPayment
        fields = ['id', 'esewa_order_id', 'amount', 'order_id', 'status', 'created_at']
        read_only_fields = ['status','created_at']

    # to validate the the data from esewa payment https://uat.esewa.com.np/epay/transrec   {
    def create(self, validated_data):
        payment = esewaPayment.objects.create(
            esewa_order_id=validated_data['esewa_order_id'],
            amount=validated_data['amount'],
            order=validated_data['order_id'],
            status = "Pending"
        )
        return payment