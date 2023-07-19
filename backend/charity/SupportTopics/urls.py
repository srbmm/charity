from django.urls import path
from .views import SupportTopicsListView,SupportTopicsDetailView


urlpatterns = [    
    path('all/',SupportTopicsListView.as_view(),name='support topics'),
    path('all/<int:pk>',SupportTopicsDetailView.as_view(),name='support detail view'),
]