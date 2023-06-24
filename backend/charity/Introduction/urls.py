

from django.urls import path

from .views import VisionView,HistoryView


urlpatterns = [
    path('vision/',VisionView.as_view(),name='vision'),
    path('history/',HistoryView.as_view(),name='history'),
        
]












