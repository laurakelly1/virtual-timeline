from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ItemSerializer
from .models import Item
# Create your views here.

# The viewsets base class provides the implementation for CRUD operations by default.

# Routes are :
# get and post at /items
# put and delete at /items/id 

class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer