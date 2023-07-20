from django.contrib import admin

from .models import Supporter


@admin.register(Supporter)
class SupporterAdmin(admin.ModelAdmin):
    exclude =('created_date',)
    list_display = [
        'full_name',
        'biography',
        'is_special',
        
    ]
    #list_filter = ['categories']
    #filter_horizontal = ('categories',)
    





