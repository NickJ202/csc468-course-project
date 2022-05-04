from django.urls import include, path

from events import views as event_views

urlpatterns = [
    path('', event_views.EventsView.as_view()),
]