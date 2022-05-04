from django.shortcuts import render
from rest_framework import generics

from .models import Organization
from .serializers import OrgSerializer

class OrgListView(generics.ListCreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer
    
class OrgDetailView(generics.RetrieveAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer

class OrgDetailView(generics.UpdateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer

class OrgDetailView(generics.DestroyAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer
