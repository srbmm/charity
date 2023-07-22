from django.contrib import admin
from django.urls import path , include

from django.conf import settings
from django.conf.urls.static import static


from azbankgateways.urls import az_bank_gateways_urls


urlpatterns = [

    path('admin/', admin.site.urls),
    # getway url
    path('bankgateways/', az_bank_gateways_urls()),

    path('news/',include('News.urls')),
    path('introduction/',include('Introduction.urls')),
    path("members/",include("Members.urls")),
    path('supportTopics/',include('SupportTopics.urls')),
    path('supporters/',include('Supporters.urls')),
    path('projects/',include('Project.urls')),
    path('Info/',include('Information.urls')),
    path('support/',include('Support.urls')),
]


urlpatterns += static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)

