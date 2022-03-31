from django.urls import include, path

from users import views as user_views

urlpatterns = [
    path('user/register/', user_views.UserRegisterView.as_view()),
    path('org/register/', user_views.OrgRegisterView.as_view()),
    path('accounts/', include("django.contrib.auth.urls"))
]