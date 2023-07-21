from django.contrib import admin

from .models import SupportReceipt,NonCashSupport


@admin.register(SupportReceipt)
class SupportReceiptAdmin(admin.ModelAdmin):
    
    list_display = [
        'full_name',
        'amount'
    ]
    list_filter = ['topic','support_fund']

    def get_readonly_fields(self, request, obj=None):
        return [field.name for field in self.opts.fields if field.name != 'id']

    def has_add_permission(self, request,object = None) -> bool:
        return False
    

@admin.register(NonCashSupport)
class NonCashSupportAdmin(admin.ModelAdmin):
    exclude =('id','support_date')
    list_display = [
        'full_name',
        'support_type',
        'topic'
    ]
    list_filter = ['topic','support_type']

    def get_readonly_fields(self, request, obj=None):
        return [field.name for field in self.opts.fields if field.name != 'id']

    def has_add_permission(self, request,object = None) -> bool:
        return False