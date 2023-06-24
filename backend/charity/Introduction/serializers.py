

from rest_framework import serializers

from .models import (
    Vision,History,Mission,Chart,
    Statute,Values,Permissions
)

class VisionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Vision
        fields = ('title','avatar','text')

        
class HistorySerializer(serializers.ModelSerializer):    
    class Meta:
        model = History
        fields = ('title','avatar','text')



class MissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mission
        fields = ('title','avatar','text')


class ChartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chart
        fields = ('title','file')


class StatuteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Statute
        fields = ('title','text','file')



class ValuesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Values
        fields = ('title','text')


class PermissionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Permissions
        fields = ('title','file')









