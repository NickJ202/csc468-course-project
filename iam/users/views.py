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
from rest_framework import permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from .models import User


class AuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = [permissions.IsAuthenticated]


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = [permissions.IsAuthenticated]


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
