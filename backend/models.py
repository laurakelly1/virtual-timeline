from django.db import models
import datetime
from django.contrib.auth.models import User

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    date = models.DateField(default=datetime.date.today)

    # user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name