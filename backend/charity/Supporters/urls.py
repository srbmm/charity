from django.urls import path
from .views import (
    RelativeView,AllSupportersView,
    FacultyView,NeitherView,GraduatesView,OrganizationView,
    SupporterDetailView,SpecialSupportersView
)


urlpatterns = [
    path('all/',AllSupportersView.as_view()),
    #path('relatives/',RelativeView.as_view()),
    #path('faculty/',FacultyView.as_view()),
    #path('organization/',OrganizationView.as_view()),
    #path('graduates/',GraduatesView.as_view()),
    #path('neither/',NeitherView.as_view()),

    # for main page
    path('main-page/',SpecialSupportersView.as_view(),name='3 main supporter'),
    # for single supporter
    path('<int:pk>/',SupporterDetailView.as_view(),name='single supporter'),        
]

