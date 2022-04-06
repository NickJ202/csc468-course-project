from django.urls import include, path

from users import views as user_views

urlpatterns = [
    path('', user_views.UserListView.as_view()),
    path('<int:pk>/', user_views.UserDetailView.as_view()),
    path('accounts/', include("django.contrib.auth.urls"))
]