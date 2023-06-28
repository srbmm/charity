
from django.urls import path
from .views import index


urlpatterns = [


    path("previous-board/",index,name="previous board"),
    path("current-board/" , index , name= "current board"),
    path("founders/",index,name="founders"),
    path("trustees/",index,name="trustees"), # هیت امنا 
    path("inspectors/",index,name="inspectors"),
    path("members/",index,name="members"),


    


]