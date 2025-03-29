from django.urls import path
from .views import *
urlpatterns = [
    path("createOrder",OrderCreateView.as_view(),name="OrderCreate"),
    path("getOrder",OrderGetView.as_view(),name="Orderget"),
]