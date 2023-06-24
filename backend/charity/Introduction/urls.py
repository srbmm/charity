

from django.urls import path

from .views import VisionView,HistoryView,MissionView


urlpatterns = [
    path('vision/',VisionView.as_view(),name='vision'),
    path('history/',HistoryView.as_view(),name='history'),
    path('mission/',MissionView.as_view(),name='mission'),
    
    
]












