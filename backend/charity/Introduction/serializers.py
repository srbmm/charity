

from rest_framework import serializers

from .models import Vision


class VisionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Vision
        fields = ('title','avatar','text')

        








