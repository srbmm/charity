

from django.urls import path

from .views import SupportView,NonCashSupportView

urlpatterns = [
    path('cash/',SupportView.as_view(),name='cash support'),
    path('non-cash/',NonCashSupportView.as_view(),name='non cash support'),
    
]






