

from rest_framework import serializers

from .models import Vision,History


class VisionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Vision
        fields = ('title','avatar','text')

        
class HistorySerializer(serializers.ModelSerializer):    
    class Meta:
        model = History
        fields = ('title','avatar','text')








