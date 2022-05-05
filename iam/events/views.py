from django.http import HttpResponse, JsonResponse
from django.core import serializers
from rest_framework import generics
from rest_framework.response import Response

from .models import Event
from .serializers import EventSerializer
from iam.serializers import JSONSerializer

class EventsView(generics.ListCreateAPIView):
    def get(self, request):
        serializer = EventSerializer()
        org = request.GET.get('org')
        if org:
            qs = Event.objects.filter(org=org)
        else:
            qs = Event.objects.all()
        qs_json = JSONSerializer().serialize(qs)
        return HttpResponse(qs_json, content_type='application/json')
        
    serializer_class = EventSerializer