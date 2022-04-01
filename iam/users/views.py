# from django.contrib.auth import login
# from django.shortcuts import redirect, render
# from django.urls import reverse
# from users.forms import CustomUserCreationForm
from rest_framework import generics
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from users.serializers import UserSerializer
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status

from .models import User


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# def dashboard(request):
#     return render(request, "users/dashboard.html")
#
# def register(request):
#     if request.method == "GET":
#         return render(
#             request, "users/register.html",
#             {"form": CustomUserCreationForm}
#         )
#     elif request.method == "POST":
#         form = CustomUserCreationForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             login(request, user)
#             return redirect(reverse("dashboard"))