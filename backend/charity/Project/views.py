

from django.shortcuts import render

# Create your views here.


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import Project

from .serializers import ProjectSerializer


class ProjectsListView(APIView):

    def get(self,request):
        the_objects = Project.objects.all()
        serializer = ProjectSerializer(the_objects,many = True, context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)

