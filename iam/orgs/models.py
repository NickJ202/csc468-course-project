from django.db import models

from users.models import User

class Organization(models.Model):
    name = models.CharField(max_length=150)
    address_1 = models.CharField(max_length=1024)
    locality = models.CharField(max_length=300)
    administrative_area = models.CharField(max_length=300)
    postal_code = models.CharField(max_length=300)
    country = models.CharField(max_length=300)
    
    members = models.ManyToManyField(User, related_name="members")
    admin = models.ForeignKey(User, on_delete=models.CASCADE, related_name="admin")

    REQUIRED_FIELDS = [name]

    def __str__(self):
        return self.name
