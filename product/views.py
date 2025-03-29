from django.shortcuts import render
from rest_framework import generics, viewsets
from .serializations import *
from .models import *
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.pagination import PageNumberPagination

# Category Views
class ProductCategoryView(viewsets.ViewSet):
    def list(self, request):
        queryset = ProductCategory.objects.all()
        serializer = ProductCategorySerialization(queryset, many=True)
        return Response(serializer.data)

class ProductCategoryCreateView(viewsets.ViewSet):
    def create(self, request):
        serializer = ProductCategorySerialization(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class ProductCategoryGetbyidView(generics.RetrieveAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategoryListSerialization
    lookup_field = 'id'

# Product Views
class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialization
    pagination_class = PageNumberPagination
    permission_classes = [permissions.IsAuthenticated]

class ProductCreateView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialization
    permission_classes = [permissions.IsAuthenticated]

class ProductGetbyidView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialization

class ProductUpdateView(generics.UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialization

class ProductDeleteView(generics.DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialization
    permission_classes = [permissions.IsAuthenticated]