from users.views import dashboard, register
from django.urls import include, path

from users import views as user_views

urlpatterns = [
    path('users/', user_views.UserListView.as_view()),
    path('users/<int:pk>/', user_views.UserDetailView.as_view()),
    path('orgs/', user_views.OrgListView.as_view()),
    path('orgs/<int:pk>/', user_views.OrgDetailView.as_view()),
    path('dashboard/', dashboard, name="dashboard"),
    path('accounts/', include("django.contrib.auth.urls"))
]