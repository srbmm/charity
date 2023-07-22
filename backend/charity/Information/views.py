from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Links,Info
from .serializers import InfoSerializer,LinkSerializer


class InfoView(APIView):
    def get(self,request):
        try:
            the_objects = Info.objects.all().first()
        except Info.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)
        
        serailizer = InfoSerializer(the_objects,context = {'request':request})
        return Response(serailizer.data,status=status.HTTP_200_OK)
    

class LinksView(APIView):
    def get(self,request):
        the_objects = Links.objects.all()
        serializer = LinkSerializer(the_objects,many = True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    
