from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import Vision,History
from .serializers import VisionSerializer , HistorySerializer



class VisionView(APIView):

    def get(self,request):
        vision = Vision.objects.all().first()
        serializer = VisionSerializer(vision,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)

    



class HistoryView(APIView):

    def get(self,request):
        history = History.objects.all().first()
        serializer = HistorySerializer(history,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    


