from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import News
from .serializers import NewsSerializer


class SelectedNewsView(APIView):
    def get(self,request):
        selected_news = News.objects.filter(is_selected = True)
        count = selected_news.count()
        serializer = NewsSerializer(selected_news,many=True,context = {'request':request})
        return Response({'News_count':count,'News':serializer.data} , status=status.HTTP_200_OK)


class NewsListView(APIView):
    def get(self,request):
        if len(dict(request.query_params)) == 0:
            all_the_news = News.objects.all()
            serializer = NewsSerializer(all_the_news,many = True, context = {'request':request})
            return Response({'News_count':all_the_news.count(),'News':serializer.data})
        
        page = 1 
        count = 9
        order_by = None
        reverse = False
        if request.query_params.get('count'):
            count = int(request.query_params.get('count'))
            

        if request.query_params.get('page'):
            page = int(request.query_params.get('page'))
            

        if request.query_params.get('sort'):
            sort = request.query_params.get('sort')
            if sort == 'seen':
                order_by = 'seen_count'
            if sort == 'date':
                order_by = 'created_date'

            if request.query_params.get('reverse') == 'true':
                reverse = True        

        the_pages = News.objects.filter(id__in = list(range(((page*count)-(count-1)),(page*count)+1)))
        
        if order_by is None:
            serializer = NewsSerializer(the_pages,many = True , context = {'request':request})
            return Response({'News_count':the_pages.count(),'News':serializer.data}) 

        orderd_pages = News.objects.order_by(order_by).reverse()
        if reverse == True:
            orderd_pages = News.objects.order_by(order_by)
        
        number1 = (page*count)-count
        number2 = page*count
        the_pages = orderd_pages[number1:number2]
        
        serializer = NewsSerializer(the_pages,many = True , context = {'request':request})
        return Response({'News_count':the_pages.count(),'News':serializer.data})
    

class NewsDetailView(APIView):
    def get(self,request,pk):
        try:
            the_News = News.objects.get(pk=pk)
        except News.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        the_News.seen_count +=1
        the_News.save()
        serializer = NewsSerializer(the_News,context = {'request':request})
        return Response(serializer.data)
        
