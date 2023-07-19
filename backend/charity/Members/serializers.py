from rest_framework import serializers

from .models import CurrentBoard,PreviousBoard,Inspectors,Members,Founders,Trustees


class CurrentBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrentBoard
        fields = ('full_name','avatar','biography')


class PreviousBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PreviousBoard
        fields = ('full_name','avatar','biography')


class InspectorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inspectors
        fields = ('full_name','avatar','biography')


class TrusteesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trustees
        fields = ('full_name','avatar','biography')


class FoundersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Founders
        fields = ('full_name','avatar','biography')


class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ('full_name','avatar','biography')
