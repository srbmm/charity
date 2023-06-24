from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import (
    Vision,History,Mission,Chart,Statute
)

from .serializers import (
    VisionSerializer , HistorySerializer,MissionSerializer,
    ChartSerializer,StatuteSerializer
)



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
    

class MissionView(APIView):

    def get(self,request):
        mission = Mission.objects.all().first()
        serializer = MissionSerializer(mission,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    


class ChartView(APIView):

    def get(self,request):
        chart = Chart.objects.all().first()
        serializer = ChartSerializer(chart,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    

class StatuteView(APIView):

    def get(self,request):
        statute = Statute.objects.all().first()
        serializer = StatuteSerializer(statute,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    


