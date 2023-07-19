from rest_framework import serializers
from .models import SupportTopics


class SupportTopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportTopics
        fields = (
            'id',
            'topic','title',
            'avatar','budget',
            'progress'
        )


class SingleSupportTopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportTopics
        fields = (
            'id',
            'topic','title',
            'avatar','budget',
            'description','progress'
        )