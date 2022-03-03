from users.views import dashboard, register
from django.urls import include, path

urlpatterns = [
    path('dashboard/', dashboard, name="dashboard"),
    path('accounts/', include("django.contrib.auth.urls")),
    path('register/', register, name="register"),
]