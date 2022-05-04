from django.db import models
from users.models import User
from orgs.models import Organization

class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1024)
    start_date = models.CharField(max_length=300)
    end_date = models.CharField(max_length=300)
    start_time = models.CharField(max_length=300)
    end_time = models.CharField(max_length=300)
    min_attendees = models.CharField(max_length=300)
    max_attendees = models.CharField(max_length=300)
    tips = models.CharField(max_length=300)
    address_1 = models.CharField(max_length=1024)
    locality = models.CharField(max_length=1024)
    administrative_area = models.CharField(max_length=300)
    postal_code = models.CharField(max_length=300)
    country = models.CharField(max_length=300)
    org = models.IntegerField()
    
    REQUIRED_FIELDS = [title]

    def __str__(self):
        return self.name