

from rest_framework import serializers
from .models import SupportReceipt



class SupportReceiptSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SupportReceipt
        fields = ('topic','support_fund','full_name','email','phone_number','amount')





