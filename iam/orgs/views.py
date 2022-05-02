from django.shortcuts import render
from rest_framework import generics

from .models import Organization
from .serializers import OrgSerializer

class OrgListView(generics.ListCreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer

    # get_serializer_class = OrgReadSerializer

    # def post(self, request, *args, **kwargs):
    #     serializer = self.serializer_class(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         # user = request.data.pop('admin')
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

"""class OrgDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer
"""
class OrgDetailView(generics.RetrieveAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer

class OrgDetailView(generics.UpdateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer

class OrgDetailView(generics.DestroyAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer