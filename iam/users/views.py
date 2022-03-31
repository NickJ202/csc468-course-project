# from django.contrib.auth import login
# from django.shortcuts import redirect, render
# from django.urls import reverse
# from users.forms import CustomUserCreationForm
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from users.serializers import UserSerializer, OrgSerializer
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from users.models import User, Organization, Event
from iam import http_response as http

class UserRegisterView(APIView):
    def get(self, request):
        # return http.success("GET - prob will use this to fetch org by id")
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        # print("Register Org: " + request.data['name'])
        # return http.success()
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrgRegisterView(APIView):
    def get(self, request):
        orgs = Organization.objects.all()
        serializer = OrgSerializer(orgs, many=True)
        return Response(serializer.data)

    def post(self, request):
        # print("Register Org: " + request.data['name'])
        # return http.success()
        serializer = OrgSerializer(data=request.data)
        import pdb;
        pdb.set_trace()
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response("!!", status=status.HTTP_400_BAD_REQUEST)

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