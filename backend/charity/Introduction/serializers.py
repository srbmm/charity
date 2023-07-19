

from rest_framework import serializers

from .models import (
    Vision,History,Mission,Chart,
    Statute,Values,Permissions,Financial,
    Audit,Performance,Faq,Partners
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



class FinancialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Financial
        fields = ('title','file')



class AuditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audit
        fields = ('title','file')



class PerformanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Performance
        fields = ('title','file')


class FaqSerializer(serializers.ModelSerializer):

    class Meta:
        model = Faq
        fields = ('question','answer')




class PartnersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Partners
        fields = (
                    'full_name','avatar','post','biography','phone_number',
                    'email'
                )
        


        







