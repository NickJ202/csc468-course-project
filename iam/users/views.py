# from django.contrib.auth import login
# from django.shortcuts import redirect, render
# from django.urls import reverse
# from users.forms import CustomUserCreationForm
from rest_framework import generics
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from users.serializers import UserSerializer, OrgSerializer
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from users.models import User, Organization, Event
from iam import http_response as http

class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class OrgListView(generics.ListCreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer

    # def post(self, request, *args, **kwargs):
    #     serializer = self.serializer_class(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrgDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrgSerializer

def dashboard(request):
    return render(request, "users/dashboard.html")

def register(request):
    if request.method == "GET":
        return render(
            request, "users/register.html",
            {"form": CustomUserCreationForm}
        )
    elif request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse("dashboard"))