from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Project

from .serializers import ProjectSerializer,SingleProjectSerializer


class ProjectsListView(APIView):
    def get(self,request):

        if len(dict(request.query_params)) == 0:
            the_objects = Project.objects.all()
            serializer = ProjectSerializer(the_objects,many = True, context = {'request':request})
            return Response(serializer.data,status=status.HTTP_200_OK)

        the_objects = Project.objects.all()

        if request.query_params.get('topic'):
            topic = request.query_params.get('topic')
            if topic in ['studentSupport','sports','cultural','research','educational','constructional']:
                the_objects = the_objects.filter(topic = topic)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST,data={'error':'Invalid topic'})
            
        if request.query_params.get('state'):
            state = request.query_params.get('state')
            if state in ['doing','done','possible']:
                the_objects = the_objects.filter(state = state)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST,data={'error':'Invalid state'})
    
        if request.query_params.get('fund'):
            support_fund = request.query_params.get('fund')
            if support_fund in ['social','technical','agriculture']:
                the_objects = the_objects.filter(support_fund = support_fund)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer = ProjectSerializer(the_objects,many = True , context = {'request': request})
        return Response(serializer.data,status=status.HTTP_200_OK)    


class ProjectDetailView(APIView):
    def get(self,request,pk):
        try:
            the_object = Project.objects.get(pk = pk)
        except Project.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)
        
        serializer = SingleProjectSerializer(the_object,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)