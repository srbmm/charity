


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



from .models import SupportTopics

from .serializers import SupportTopicsSerializer




class SupportTopicsListView(APIView):


    def get(self,request):

        topic = None

        if(len(request.query_params) == 0):
            all_the_objects = SupportTopics.objects.all()
            serializer = SupportTopicsSerializer(all_the_objects , many=True ,context = {'request' : request})
            return Response(serializer.data,status=status.HTTP_200_OK)
        


        if request.query_params.get('topic'):
            topic = request.query_params.get('topic')
            all_the_objects = SupportTopics.objects.filter(topic = topic)
            serializer = SupportTopicsSerializer(all_the_objects , many=True ,context = {'request' : request})
            return Response(serializer.data,status=status.HTTP_200_OK)



        return Response(status=status.HTTP_204_NO_CONTENT)





class SupportTopicsDetailView(APIView):

    def get(self,request,pk):
        pass