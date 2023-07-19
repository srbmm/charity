

from rest_framework import serializers

from .models import Supporter


class SupporterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Supporter
        fields = (
            'id',
            'full_name',
            'avatar',
            'biography',
            
        )


class SingleSupporterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Supporter
        fields = (
    
            'full_name',
            'avatar',
            'biography',
            'description',
        )




