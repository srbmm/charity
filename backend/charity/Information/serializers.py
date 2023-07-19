from rest_framework import serializers
from .models import Links,Info


class InfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Info
        fields = (
            'address',
            'phone_number1',
            'phone_number2',
            'email',
            'whatsapp',
            'telegram',
            'instagram'
        )


class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Links
        fields = ('title','link')

    