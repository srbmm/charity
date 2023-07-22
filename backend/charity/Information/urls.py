from django.urls import path

from .views import InfoView,LinksView


urlpatterns = [
    path('info/',InfoView.as_view(),name='info'),
    path('links/',LinksView.as_view(),name='links')
]

