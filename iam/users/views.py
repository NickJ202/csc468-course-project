from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.urls import reverse

from rest_framework.views import APIView

from users.forms import CustomUserCreationForm

from iam import http_response as http


class OrgRegisterView(APIView):
    def get(self, request):
        return http.success("GET - prob will use this to fetch org by id")

    def post(self, request):
        print("Register Org: " + request.data['name'])
        return http.success()


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