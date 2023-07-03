

from django.urls import path
from . import views


urlpatterns = [
    path('',views.NewsListView.as_view()),
    path('<int:pk>',views.NewsDetailView.as_view()),
    path('selected/',views.SelectedNewsView.as_view()),
    
]





