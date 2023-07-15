

from rest_framework import serializers

from .models import Project

class ProjectSerializer(serializers.ModelSerializer):


    class Meta:
        model = Project
        fields = ('id','avatar','title','budget','state','support_fund')




class SingleProjectSerializer(serializers.ModelSerializer):


    class Meta:
        model = Project
        fields = (
            'avatar','title',
            'budget','support_fund',
            'description','state'
        )

    