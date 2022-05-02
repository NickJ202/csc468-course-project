from django.db import models
from users.models import User
from orgs.models import Organization

class Event(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    startTime = models.TimeField()
    endTime = models.TimeField()
    tag = models.CharField(max_length=100)
    organizer = models.ForeignKey(Organization, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    attendees = models.ManyToManyField(User, related_name="attendees")

    REQUIRED_FIELDS = [name]

    def __str__(self):
        return self.name