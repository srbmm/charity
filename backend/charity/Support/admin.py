from django.contrib import admin

# Register your models here.


from .models import SupportReceipt



@admin.register(SupportReceipt)
class SupportReceiptAdmin(admin.ModelAdmin):
    exclude =('created_date',)
    list_display = [
        'full_name',
        'amount'
    ]
    list_filter = ['topic','support_fund']

    def get_readonly_fields(self, request, obj=None):
        return [field.name for field in self.opts.fields]

    
