


from django.urls import path

from .views import ProjectsListView,ProjectDetailView

urlpatterns = [
    path('all/',ProjectsListView.as_view()),
    path('all/<int:pk>/',ProjectDetailView.as_view()),
    

]