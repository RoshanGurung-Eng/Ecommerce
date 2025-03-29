from django.urls import path
from .views import *
urlpatterns = [
    path("esewa/callback",EsewaCallBackView.as_view(), name="esewa-callback"),
    path("esewa/payment",EsewaPaymentView.as_view(), name="esewa-Payment"),
]