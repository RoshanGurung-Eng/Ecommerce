from django.urls import path
from .views import *
urlpatterns = [
    path("contactus",ContactGetView.as_view(), name="contactus"),
    path("create/contactus",ContactCreateView.as_view(), name="contactus"),
    path("delete/contactus/<int:id>",ContactDestroyView.as_view(), name="contactus"),

]