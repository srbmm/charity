
from django.contrib import admin
from django.urls import path , include


from django.conf import settings
from django.conf.urls.static import static




urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('News/',include('News.urls')),
    path('Introduction/',include('Introduction.urls')),
    path("Members/",include("Members.urls")),
    path('SupportTopics/',include('SupportTopics.urls')),
    path('supporters/',include('Supporters.urls')),
    path('projects/',include('Project.urls')),
    path('Info/',include('Information.urls')),
    

    


]



urlpatterns += static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)

