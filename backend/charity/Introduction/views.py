from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import Vision
from .serializers import VisionSerializer



class VisionView(APIView):

    def get(self,request):
        vision = Vision.objects.all().first()
        serializer = VisionSerializer(vision,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)

    



