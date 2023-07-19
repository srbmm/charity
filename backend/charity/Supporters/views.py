from django.shortcuts import render

# Create your views here.


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import Supporter,Category
from .serializers import SupporterSerializer,SingleSupporterSerializer




class AllSupportersView(APIView):

    def get(self,request):
        all_supporters = Supporter.objects.all()
        serializer = SupporterSerializer(all_supporters,many = True, context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    



class RelativeView(APIView):
    

    def get(self,request):
        relatives_category = Category.objects.filter(title ='relative').first()
        relatives_supporters = Supporter.objects.filter(categories__in=[relatives_category])
        serializer = SupporterSerializer(relatives_supporters,many = True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
    



class FacultyView(APIView):
    

    def get(self,request):
        relatives_category = Category.objects.filter(title ='faculty').first()
        relatives_supporters = Supporter.objects.filter(categories__in=[relatives_category])
        serializer = SupporterSerializer(relatives_supporters,many = True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)






class OrganizationView(APIView):
    

    def get(self,request):
        relatives_category = Category.objects.filter(title ='organization').first()
        relatives_supporters = Supporter.objects.filter(categories__in=[relatives_category])
        serializer = SupporterSerializer(relatives_supporters,many = True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)





class GraduatesView(APIView):
    

    def get(self,request):
        relatives_category = Category.objects.filter(title ='graduates').first()
        relatives_supporters = Supporter.objects.filter(categories__in=[relatives_category])
        serializer = SupporterSerializer(relatives_supporters,many = True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)





class NeitherView(APIView):
    

    def get(self,request):
        relatives_category = Category.objects.filter(title ='neither').first()
        relatives_supporters = Supporter.objects.filter(categories__in=[relatives_category])
        serializer = SupporterSerializer(relatives_supporters,many = True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)




class SupporterDetailView(APIView):
    

    def get(self,request,pk):
        try:
            supporter = Supporter.objects.get(pk=pk)
        except Supporter.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = SingleSupporterSerializer(supporter,context = {'request':request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    


