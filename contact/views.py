from django.shortcuts import render
from rest_framework import generics
from .serializations import *
from .models import * 

# Create your views here.

class ContactGetView(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactUsSerializer
    # permession = [permissions.IsAuthenticatedOrReadOnly]

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactUsSerializer

class ContactDestroyView(generics.DestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactUsSerializer
