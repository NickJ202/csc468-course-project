from django.urls import include, path

from users import views as user_views

urlpatterns = [
<<<<<<< HEAD
    path('user/register/', user_views.UserRegisterView.as_view()),
    path('org/register/', user_views.OrgRegisterView.as_view()),
=======
    path('users/', user_views.UserListView.as_view()),
    path('users/<int:pk>/', user_views.UserDetailView.as_view()),
    path('orgs/', user_views.OrgListView.as_view()),
    path('orgs/<int:pk>/', user_views.OrgDetailView.as_view()),
    path('dashboard/', dashboard, name="dashboard"),
>>>>>>> f15e23aa59a42eaee5c76be80ed507071d59733b
    path('accounts/', include("django.contrib.auth.urls"))
]