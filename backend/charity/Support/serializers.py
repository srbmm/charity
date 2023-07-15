

from rest_framework import serializers
from .models import SupportReceipt,NonCashSupport


class SupportReceiptSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SupportReceipt
        fields = ('topic','support_fund','full_name','email','phone_number','amount')




class NonCashSupportSerializer(serializers.ModelSerializer):

    class Meta:
        model = NonCashSupport
        fields = ('topic','full_name','phone_number','support_type','description')
    

