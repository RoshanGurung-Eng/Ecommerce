from django.urls import path
from .views import *

urlpatterns = [
    # Category URLs
    path("category", ProductCategoryView.as_view({'get': 'list'}), name="category"),
    path("create/category", ProductCategoryCreateView.as_view({'post': 'create'}), name="category"),
    path("getcategory/<int:id>", ProductCategoryGetbyidView.as_view(), name="category"),

    # Product URLs
    path("product", ProductView.as_view(), name="product"),
    path("create/product", ProductCreateView.as_view(), name="product"),
    path("getproduct/<int:pk>", ProductGetbyidView.as_view(), name="product"),
    path("updateproduct/<int:pk>", ProductUpdateView.as_view(), name="product"),
    path("deleteproduct/<int:pk>", ProductDeleteView.as_view(), name="product"),
]