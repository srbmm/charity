

from django.shortcuts import render

# Create your views here.


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import Project

from .serializers import ProjectSerializer,SingleProjectSerializer


class ProjectsListView(APIView):

    def get(self,request):
        the_objects = Project.objects.all()
        serializer = ProjectSerializer(the_objects,many = True, context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)



class ProjectDetailView(APIView):


    def get(self,request,pk):
        try:
            the_object = Project.objects.get(pk = pk)
        except Project.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)
        
        serializer = SingleProjectSerializer(the_object,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)