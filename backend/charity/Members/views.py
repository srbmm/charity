

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import(
    PreviousBoard,CurrentBoard,Trustees,Inspectors,Members,Founders
)

from .serializers import(
    PreviousBoardSerializer,CurrentBoardSerializer,TrusteesSerializer,
    InspectorsSerializer,MembersSerializer,FoundersSerializer
)



class PreviousBoardView(APIView):

    def get(self,request):
        previousBoard = PreviousBoard.objects.all()
        serializer = PreviousBoardSerializer(previousBoard,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)



class CurrentBoardView(APIView):

    def get(self,request):
        currentBoard= CurrentBoard.objects.all()
        serializer = CurrentBoardSerializer(currentBoard,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    


class TrusteesView(APIView):

    def get(self,request):
        trustees = Trustees.objects.all()
        serializer = TrusteesSerializer(trustees,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    



class InspectorsView(APIView):

    def get(self,request):
        inspectors = Inspectors.objects.all()
        serializer = InspectorsSerializer(inspectors,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    




class FoundersView(APIView):

    def get(self,request):
        founders = Founders.objects.all()
        serializer = FoundersSerializer(founders,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    




class MembersView(APIView):

    def get(self,request):
        members = Members.objects.all()
        serializer = MembersSerializer(members,many=True,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    
