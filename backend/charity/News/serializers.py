

from rest_framework import serializers

from .models import News


class NewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = News
        fields = ('id','title','avatar','text','created_date','summary','seen_count')




