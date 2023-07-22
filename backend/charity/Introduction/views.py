from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import (
    Vision,History,Mission,Chart,Statute,
    Values,Permissions,Financial,
    Audit,Performance,Faq,Partners
)

from .serializers import (
    VisionSerializer , HistorySerializer,MissionSerializer,
    ChartSerializer,StatuteSerializer,ValuesSerializer,
    PermissionsSerializer,FinancialSerializer,
    AuditSerializer,PerformanceSerializer,FaqSerializer,
    PartnersSerializer
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
    



class ValuesView(APIView):

    def get(self,request):
        values = Values.objects.all().first()
        serializer = ValuesSerializer(values,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    

class PermissionsView(APIView):

    def get(self,request):
        permissions = Permissions.objects.all()
        serializer = PermissionsSerializer(permissions,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    

class FinancialView(APIView):

    def get(self,request):
        financial= Financial.objects.all()
        serializer = FinancialSerializer(financial,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    


class AuditView(APIView):

    def get(self,request):
        audit = Audit.objects.all()
        serializer = AuditSerializer(audit,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    


class PerformanceView(APIView):

    def get(self,request):
        performance = Performance.objects.all()
        serializer = PerformanceSerializer(performance,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    


class FaqView(APIView):

    def get(self,request):
        faqs = Faq.objects.all()
        serializer = FaqSerializer(faqs,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)





class PartnersView(APIView):


    def get(self,request):
        partners = Partners.objects.all()
        serializer = PartnersSerializer(partners,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)


