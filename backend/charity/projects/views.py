


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



from .models import SupportTopics

from .serializers import SupportTopicsSerializer




class SupportTopicsListView(APIView):


    def get(self,request):
        pass





class SupportTopicsDetailView(APIView):

    def get(self,request,pk):
        pass