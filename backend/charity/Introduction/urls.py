

from django.urls import path

from .views import VisionView


urlpatterns = [
    path('vision/',VisionView.as_view(),name='vision'),
    #path('history/')    
]












