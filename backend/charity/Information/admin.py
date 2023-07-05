from django.contrib import admin

# Register your models here.
from .models import Info,Links


@admin.register(Info)
class InfoAdmin(admin.ModelAdmin):
    list_display = ['title']
    exclude = ('title',)
    

    def has_add_permission(self, request, obj=None):
        if Info.objects.exists():
            return False  
        return True# disable the button if Vision exists
    


@admin.register(Links)
class LinksAdmin(admin.ModelAdmin):
    list_display = ['title']



