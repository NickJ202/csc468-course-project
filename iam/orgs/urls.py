from django.urls import include, path

from orgs import views as org_views

urlpatterns = [
    path('', org_views.OrgListView.as_view()),
    path('<int:pk>/', org_views.OrgDetailView.as_view()),
]