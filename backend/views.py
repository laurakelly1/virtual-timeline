from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ItemSerializer
from .models import Item
# Create your views here.

# # The viewsets base class provides the implementation for CRUD operations by default.
class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer