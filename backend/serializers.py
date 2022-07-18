from rest_framework import serializers
from .models import Item

# We need serializers to convert model instances to JSON so that the frontend can work with the received data.
# This code specifies the model to work with and the fields to be converted to JSON

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'name', 'description', 'date')