from rest_framework import generics

from .models import Event
from .serializers import EventSerializer

class EventsView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer