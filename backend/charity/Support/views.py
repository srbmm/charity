from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import SupportReceipt,NonCashSupport
from .serializers import SupportReceiptSerializer,NonCashSupportSerializer



class SupportView(APIView):
    def post(self,request):
        the_data = SupportReceiptSerializer(data = request.data)
        if not the_data.is_valid():
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        the_data.save()
        return Response(status=status.HTTP_200_OK)

    def get(self,request):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
    


class NonCashSupportView(APIView):
    def get(self,request):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self,request):
        the_data = NonCashSupportSerializer(data = request.data)
        if not the_data.is_valid():
            return Response(status=status.HTTP_403_FORBIDDEN)
        the_data.save()
        return Response(status=status.HTTP_200_OK)









