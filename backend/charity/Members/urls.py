
from django.urls import path
from .views import (
    CurrentBoardView,InspectorsView,TrusteesView,FoundersView,PreviousBoardView,
    MembersView

)


urlpatterns = [


    path("previous-board/",PreviousBoardView.as_view(),name="previous board"),
    path("current-board/" , CurrentBoardView.as_view(), name= "current board"),
    path("founders/",FoundersView.as_view(),name="founders"),
    path("trustees/",TrusteesView.as_view(),name="trustees"), # هیت امنا 
    path("inspectors/",InspectorsView.as_view(),name="inspectors"),
    path("members/",MembersView.as_view(),name="members"),




    


]