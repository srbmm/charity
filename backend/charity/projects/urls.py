

from django.urls import path
from .views import SupportTopicsListView


urlpatterns = [
    path('all/',SupportTopicsListView.as_view(),name='support topics'),

]


